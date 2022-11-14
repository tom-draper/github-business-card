<script lang="ts">
  import Card from "./lib/Card.svelte";

  function collectUsername() {
    let username = document.getElementById("username").value;
    return username;
  }

  async function fetchUserData(user: string) {
    return fetch(`https://api.github.com/users/${user}`).then((response) => {
      console.log(response);
      if (response.status == 200) {
        return response.json();
      }
    });
  }

  async function fetchUserRepos(user: string, N: number) {
    return fetch(
      `https://api.github.com/users/${user}/repos?per_page=${N}`
    ).then((response) => {
      if (response.status == 200) {
        return response.json();
      }
    });
  }

  function validData() {
    return data.repos != undefined;
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

  async function fetchRepoLanguages(url, languageCounts) {
    fetch(url).then((response) => {
      if (response.status == 200) {
        response.json().then((languages) => {
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

  async function fetchRepoStats(user: string) {
    let languageCounts = {};
    for (let i = 0; i < data.repos.length; i++) {
      await fetch(
        `https://api.github.com/repos/${user}/${data.repos[i].name}`
      ).then((response) => {
        if (response.status == 200) {
          response.json().then(async (repo) => {
            data.stats.stars += repo.stargazers_count;
            data.stats.forks += repo.forks;
            fetchRepoLanguages(
              data.repos[i].languages_url,
              languageCounts
            );
          });
        }
      });
    }

    data.stats.languages = sortedLanguages(languageCounts);
  }

  let data = {
    user: undefined,
    repos: undefined,
    stats: {
      stars: 0,
      forks: 0,
      languages: [],
    },
  };
  async function fetchUser(user: string) {
    data.user = await fetchUserData(user);
    data.repos = await fetchUserRepos(user, data.user.public_repos);
    fetchRepoStats(user);
    console.log(data)
  }
</script>

<main>
  <div class="account-entry">
    GitHub username:
    <input id="username" type="text" />
    <button
      on:click={() => {
        fetchUser(collectUsername());
      }}>Submit</button
    >
  </div>

  <div class="card-container">
    {#if data.repos != undefined}
      <Card {data} />
    {/if}
  </div>
</main>

<style>
</style>
