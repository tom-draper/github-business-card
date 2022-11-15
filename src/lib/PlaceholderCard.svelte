<script>
  export let loading;
</script>

<div id="card">
  {#if loading}
    <span class="loader" />
  {:else}
    <img src="github-logo.png" alt="" />
  {/if}
</div>

<style>
  #card {
    width: 500px;
    aspect-ratio: 3.5/2;
    background: #3b3b3b;
    color: black;
    text-align: left;
    border-radius: 4px;
    margin: 0 0 100px;
    display: grid;
    position: relative;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    place-items: center;
  }

  img {
    width: 25%;
  }

  .loader {
    width: 48px;
    height: 48px;
    border: 5px solid rgb(134, 134, 134);
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
