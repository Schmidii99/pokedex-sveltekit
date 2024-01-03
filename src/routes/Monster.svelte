<script lang="ts">
    import type { IndexMonster } from "./+page";
    import { caughtMonsters } from "$lib/stores";
    import { goto } from "$app/navigation";

    export let monster: IndexMonster;
    const catchMonster = (monster: IndexMonster) => {
        //$caughtMonsters.push(monster);
        caughtMonsters.update((monsters) => {
            return [...monsters, monster];
        })
    };
    export let catchable: boolean = false;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="monster">
    <div class="monster-content"
    on:click={() => goto(`/pokemon/${monster.id}`)}>
        <img src={monster.image} alt={monster.name} />
        {monster.name}
    </div>
    {#if catchable}
        <button
        class="catch-button"
        on:click={() => catchMonster(monster)}>
            Catch
        </button>
    {/if}
    <div class="monster-id">
        {monster.id}
    </div>
</div>


<style>
    .monster {
        width: 100px;
        margin: 10px;
        padding: 10px;
        position: relative;
        background-color: #eee;
    }
    .monster:hover{
        background-color: #ddd;
    }
    .monster-content {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .monster-id {
        position: absolute;
        top: 8px;
        left: 8px;
        font-size: 0.8em;
        color: #aaa;
    }
    .catch-button {
        margin-left: 25%;
        padding: 5px 10px;
        display: inline-block;
        border: 1px solid #333;
        border-radius: 5px;
        background-color: #f9f9f9;
        color: #333;
    }
    .catch-button:hover {
        background-color: lightgreen;
    }  
</style>