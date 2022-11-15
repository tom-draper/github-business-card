<script lang="ts">
  import Card from "./lib/Card.svelte";
  import PlaceholderCard from "./lib/PlaceholderCard.svelte";

  function collectUsername() {
    // @ts-ignore
    return document.getElementById("username").value;
  }

  function fetchUserData(user: string) {
    console.log("Fetching user...");
    fetch(`https://api.github.com/users/${user}`).then((response) => {
      if (response.status == 200) {
        response.json().then((user) => {
          console.log("Setting user...");
          data.user = user;
        });
      }
    });
  }

  async function fetchUserRepos(user: string, N: number) {
    console.log("Fetching repos...");
    await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${N}`
    ).then(async (response) => {
      if (response.status == 200) {
        await response.json().then((repos) => {
          console.log("Setting repos...");
          data.repos = repos;
        });
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
      }
    });
  }

  function totalLinesEstimation(languageCounts: Object): number {
    let totalBytes = 0;
    for (let language in languageCounts) {
      totalBytes += languageCounts[language];
    }
    let avgLineLength = 30; // Assume 40 characters per line used on average
    let bytesPerChar = 4; // 4 bytes per character in utf-8
    let lines = Math.round(totalBytes / (bytesPerChar * avgLineLength));
    return lines;
  }

  async function fetchRepoStats(user: string) {
    let languageCounts = {};
    for (let i = 0; i < data.repos.length; i++) {
      console.log(`Fetching ${data.repos[i].name} repo stats...`);
      await fetch(
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
        }
      });
    }

    console.log("Finished", languageCounts, sortedLanguages(languageCounts));
    data.stats.languages = sortedLanguages(languageCounts);
    data.stats.lines = totalLinesEstimation(languageCounts);
  }

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
    await fetchUserRepos(user, 100);
    await fetchRepoStats(user);
    console.log(data);
    loading = false;
  }
</script>

<main>
  <div class="card-container">
    {#if data.stats.languages.length != 0}
      <Card {data} />
    {:else}
      <PlaceholderCard {loading}/>
    {/if}
  </div>
  <div class="account-entry">
    <input placeholder="GitHub username" id="username" type="text" />
    <button
      on:click={() => {
        fetchUser(collectUsername());
      }}>Submit</button
    >
  </div>
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
    margin-bottom: 100px;
  }
</style>
