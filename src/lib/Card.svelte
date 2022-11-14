<script lang="ts">
    export let data: any;
</script>

<div id="card">
    <div class="name">
        {data.user.name}
    </div>
    <div class="github-url">
        <span class="faint">github.com/</span>{data.user.login}
    </div>
    <div class="stats">
        <div class="stars">{data.stats.stars} stars</div>
        <div class="forks">{data.stats.forks} forks</div>
    </div>
</div>

<style>
#card {
    width: 400px;
    height: 200px;
    background: white;
    color: black;
    padding: 50px;
    text-align: left;
    border-radius: 3px;
    margin: 100px 0;
}
.name {
    font-weight: 700;
    font-size: 32px;
    margin: 10px 0;
}
.github-url {
    font-size: 18px;
}
.faint {
    opacity: 0.5;
}
</style>