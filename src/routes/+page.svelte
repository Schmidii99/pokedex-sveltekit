<script lang="ts">
    import type { PageData } from "./$types.js";
    import { generations } from "./generations";
    import type { IndexMonster } from "./+page";
    import { page } from "$app/stores";
    import { goto } from "$app/navigation";
    import Monster from "./Monster.svelte";

    export let data: PageData;

    $: monsterId = $page.url.searchParams.get("monsterId") || "";
    $: monster = data.monsters.find((monster) => monster.id == monsterId);
    $: monsterId2 = $page.url.searchParams.get("monsterId2") || "";
    $: monster2 = data.monsters.find((monster) => monster.id == monsterId2);

    const updateSearchParam = (key: string, value: string) => {
        const currentParams: URLSearchParams = new URLSearchParams($page.url.searchParams);
        currentParams.set(key, value);
        goto(`?${currentParams.toString()}`);
    };
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

<div class="monsters">
    {#each data.monsters as loop_monster (loop_monster.id)}
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
</style>