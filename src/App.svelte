<script lang="ts">
  import Card from "./lib/Card.svelte";
  import PlaceholderCard from "./lib/PlaceholderCard.svelte";

  function collectUsername() {
    // @ts-ignore
    return document.getElementById("username").value;
  }

  function fetchFailed() {
    loading = false;
    error = true;
  }

  function fetchUserData(user: string) {
    // console.log("Fetching user...");
    fetch(`https://api.github.com/users/${user}`).then((response) => {
      if (response.status == 200) {
        response.json().then((user) => {
          // console.log("Setting user...");
          data.user = user;
        });
      } else {
        fetchFailed();
      }
    });
  }

  async function fetchUserRepos(user: string, N: number) {
    // console.log("Fetching repos...");
    await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${N}`
    ).then(async (response) => {
      if (response.status == 200) {
        await response.json().then((repos) => {
          // console.log("Setting repos...");
          data.repos = repos;
        });
      } else {
        fetchFailed();
      }
    });
  }

  function sortedLanguages(languageCounts: Object): [string, number][] {
    let sortedLanguages = [];

    // Convert to list
    for (let language in languageCounts) {
      sortedLanguages.push([language, languageCounts[language]]);
    }

    // Sort by object value
    sortedLanguages.sort(function (a, b) {
      return b[1] - a[1];
    });

    return sortedLanguages;
  }

  async function fetchRepoLanguages(url: string, languageCounts: Object) {
    await fetch(url).then(async (response) => {
      if (response.status == 200) {
        await response.json().then((languages) => {
          console.log(languages);
          for (let language in languages) {
            if (!(language in languageCounts)) {
              languageCounts[language] = 0;
            }
            languageCounts[language] += languages[language];
          }
        });
      } else {
        fetchFailed();
      }
    });
  }

  function totalLinesEstimation(languageCounts: Object): number {
    let totalBytes = 0;
    for (let language in languageCounts) {
      totalBytes += languageCounts[language];
    }
    let avgLineLength = 35; // Assume 40 characters per line used on average
    let bytesPerChar = 4; // 4 bytes per character in utf-8
    let lines = Math.round(totalBytes / (bytesPerChar * avgLineLength));
    return lines;
  }

  async function runBatch(batch: Promise<Response>[]) {
    await Promise.all(batch);
    batch.length = 0;
  }

  async function _fetchRepoStats(
    languageCounts: Object,
    user: string,
    batchSize: number = 5
  ) {
    let batch = [];
    for (let i = 0; i < data.repos.length; i++) {
      console.log(`Fetching ${data.repos[i].name} repo stats...`);
      batch.push(
        fetch(
          `https://api.github.com/repos/${user}/${data.repos[i].name}`
        ).then(async (response) => {
          if (response.status == 200) {
            await response.json().then(async (repo) => {
              console.log(`Setting ${data.repos[i].name} repo stats...`);
              data.stats.stars += repo.stargazers_count;
              data.stats.forks += repo.forks;
              await fetchRepoLanguages(
                data.repos[i].languages_url,
                languageCounts
              );
            });
          } else {
            fetchFailed();
          }
        })
      );

      // Send requests in batches to avoid exceeding the GitHub API free tier rate
      // while still running as fast as possible
      if (batch.length == batchSize) {
        // Once collected a batch-worth of requests to perform at once, fetch data
        await runBatch(batch);
      }
    }

    if (batch.length > 0) {
      await runBatch(batch);
    }
  }

  async function fetchRepoStats(user: string) {
    let languageCounts = {};
    await _fetchRepoStats(languageCounts, user);

    data.stats.languages = sortedLanguages(languageCounts);
    data.stats.lines = totalLinesEstimation(languageCounts);
  }

  function onKeyDown(event: KeyboardEvent) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("button").click();
    }
  }

  let error = false;
  let loading = false;
  let data = {
    user: undefined,
    repos: undefined,
    stats: {
      stars: 0,
      forks: 0,
      lines: 0,
      languages: [],
    },
  };
  async function fetchUser(user: string) {
    loading = true;
    fetchUserData(user);
    await fetchUserRepos(user, 500);
    await fetchRepoStats(user);
    console.log(data);
    setTimeout(() => {loading = false}, 1000);  // Allow time to render card
  }
</script>

<svelte:window on:keydown={onKeyDown} />

<main>
  <div class="card-container">
    {#if data.stats.languages.length != 0}
      <Card {data} />
    {:else}
      <PlaceholderCard {loading} />
    {/if}
  </div>
  <div class="account-entry">
    <input placeholder="GitHub username" id="username" type="text" />
    <button
      id="button"
      on:click={() => {
        fetchUser(collectUsername());
      }}>Submit</button
    >
  </div>
  <div id="error" style="{error ? 'visibility: visible;' : 'visibility: hidden;'}">Error: GitHub API rate limit exceeded for your IP address. Retry in an hour.</div>
</main>

<style>
  input {
    height: 35px;
    width: 200px;
    border-radius: 4px;
    outline: none;
    border: none;
    padding: 2px 20px;
    margin-right: 4px;
  }
  button {
    border-radius: 4px;
  }
  .account-entry {
    margin-bottom: 80px;
  }
  #error {
    max-width: 400px;
    margin: auto;
    opacity: 0.8;
    color: #f13b3b;''
  }
</style>
