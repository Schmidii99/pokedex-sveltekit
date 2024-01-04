<script lang="ts">
    import type { PageData } from "./$types.js";
    import { generations } from "./generations";
    import { page } from "$app/stores";
    import { goto } from "$app/navigation";
    import Monster from "./Monster.svelte";

    export let data: PageData;

    let searchString: string = $page.url.searchParams.get("search") || "";
    $: selectedMonsters = data.monsters.filter((monster) => monster.name.includes(searchString.toLowerCase()));

    $: selectedGenerationId = $page.url.searchParams.get("generation_id") || "all";
    $: console.log(selectedGenerationId);

    const updateSearchParam = (key: string, value: string) => {
        const currentParams: URLSearchParams = new URLSearchParams($page.url.searchParams);
        currentParams.set(key, value);
        goto(`?${currentParams.toString()}`);
    };
    
    let form = {
        searchString: $page.url.searchParams.get("search") || ""
    };
    const submitSearch = (e: Event) => {
        searchString = form.searchString;
        updateSearchParam("search", searchString);
    }
</script>

<div class="generations">
    <button class="generation"
        class:active={selectedGenerationId == "all"} 
        on:click={() => updateSearchParam("generation_id", "all")}>
            All
    </button>
    {#each generations as generation (generation.id)}
        <button class="generation"
        class:active={selectedGenerationId == generation.id.toString()} 
        on:click={() => updateSearchParam("generation_id", generation.id.toString())}>
            {generation.main_region}
        </button>
    {/each}
</div>

<form class="search-form" on:submit|preventDefault={submitSearch}>
    <input type="text" bind:value={form.searchString} placeholder="Search for a pokemon..."/>
    <input type="submit" value="Search">
</form>

<div class="monsters">
    {#each selectedMonsters as loop_monster (loop_monster.id)}
        <Monster 
            monster={loop_monster}
            catchable={true}
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
        cursor: pointer;
    }
    .generation:hover {
        background-color: #ddd;
    }
    .generation.active {
        background-color: #333;
        color: #eee;
    }
    .generation.active:hover {
        background-color: #444;
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