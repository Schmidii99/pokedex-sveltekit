<script lang="ts">
    import Monster from "../Monster.svelte";
    import { caughtMonsters } from "$lib/stores";
</script>

<h2>My Monsters</h2>

<div class="monsters">
    {#each $caughtMonsters as loop_monster}
        <Monster monster={loop_monster}/>
    {/each}
</div>

<style>
    .monsters {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }
</style>