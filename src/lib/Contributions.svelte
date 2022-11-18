<script lang="ts">

export let contributions: number[];
</script>

<div class="contributions">
    {#each contributions as contribution, _}
        <div class="square s-{contribution}"></div>
    {/each}
</div>

<style>
    .contributions {
        position: absolute;
        display: grid;
        grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-auto-flow: column;
        margin-left: -37px;
    }

    .square {
        width: 7px;
        height: 7px;
        margin: 0.5px;
        border-radius: 1px;
    }
    .s-0 {
        background: #ebedf0;
    }
    .s-1 {
        background: #9be9a8;
    }
    .s-2 {
        background: #40c463;
    }
    .s-3 {
        background: #30a14e;
    }
    .s-4 {
        background: #216e39;
    }
</style>