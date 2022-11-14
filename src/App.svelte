<script lang="ts">
  import Card from "./lib/Card.svelte";

  function collectUsername() {
    let username = document.getElementById("username").value;
    return username;
  }

  async function fetchUserData(user: string) {
    return await fetch(`https://api.github.com/users/${user}`).then(
      (response) => {
        if (response.status == 200) {
          return response.json();
        }
      }
    );
  }

  async function fetchUserRepos(user: string, N: number) {
    return await fetch(
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

  async function fetchRepoStats(user: string) {
    for (let i = 0; i < data.repos.length; i++) {
      fetch(
        `https://api.github.com/repos/${user}/${data.repos[i].name}`
      ).then((response) => {
        if (response.status == 200) {
          response.json().then((repo) => {
            data.stats.stars += repo.stargazers_count;
            data.stats.forks += repo.forks;
          });
        }
      });
    }
  }

  let data = { user: undefined, repos: undefined, stats: {stars: 0, forks: 0} };
  async function fetchUser(user: string) {
    data.user = await fetchUserData(user);
    data.repos = await fetchUserRepos(user, data.user.public_repos);
    fetchRepoStats(user);
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
