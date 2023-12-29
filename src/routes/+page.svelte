<script lang="ts">
    import type { PageData } from "./$types.js";
    import { generations } from "./generations";
    import type { IndexMonster } from "./+page";
    import { page } from "$app/stores";
    import { goto } from "$app/navigation";
    import Monster from "./Monster.svelte";

    export let data: PageData;

    let searchString: string = "";
    $: selectedMonsters = data.monsters.filter((monster) => monster.name.includes(searchString.toLowerCase()));

    $: monsterId = $page.url.searchParams.get("monsterId") || "";
    $: monster = data.monsters.find((monster) => monster.id == monsterId);
    $: monsterId2 = $page.url.searchParams.get("monsterId2") || "";
    $: monster2 = data.monsters.find((monster) => monster.id == monsterId2);

    const updateSearchParam = (key: string, value: string) => {
        const currentParams: URLSearchParams = new URLSearchParams($page.url.searchParams);
        currentParams.set(key, value);
        goto(`?${currentParams.toString()}`);
    };
    
    let form = {
        searchString: ""
    };
    const submitSearch = (e: Event) => {
        searchString = form.searchString;
    }
</script>

{#if monster}
    <Monster monster={monster}
    updateSearchParam={updateSearchParam}/>
{/if}
{#if monster2}
    <Monster monster={monster2}
    updateSearchParam={updateSearchParam}/>
{/if}

<div class="generations">
    {#each generations as generation (generation.id)}
        <div class="generation">{generation.main_region}</div>
    {/each}
</div>

<form class="search-form" on:submit={submitSearch}>
    <input type="text" bind:value={form.searchString} placeholder="Search for a pokemon..."/>
    <input type="submit" value="Search">
</form>

<div class="monsters">
    {#each selectedMonsters as loop_monster (loop_monster.id)}
        <Monster 
            monster={loop_monster}
            updateSearchParam={updateSearchParam}
            isInteractive={true}
        />
    {/each}
</div>

<style>
    .monsters {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }
    .generations {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }
    .generation {
        margin: 5px;
        padding: 5px 10px;
        border: 1px solid black;
        background-color: #f9f9f9;
        color: #333;
    }
    .generation:hover {
        background-color: #ddd;
    }

    .search-form {
        display: flex;
        justify-content: center;
        margin: 20px 0;
    }
    .search-form input[type="text"] {
        padding: 5px, 10px;
        border: 1px solid #333;
        border-radius: 5px;
        width: 200px;
    }
    .search-form input[type="submit"] {
        padding: 5px 10px;
        margin-left: 10px;
        border: 1px solid #333;
        border-radius: 5px;
        background-color: #f9f9f9;
        color: #333
    }
    .search-form input[type="submit"]:hover {
        background-color: #ddd;
    }
</style>