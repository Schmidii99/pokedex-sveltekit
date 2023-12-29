<script lang="ts">
    import type { PageData } from "./$types.js";
    import { generations } from "./generations";
    import type { IndexMonster } from "./+page";
    import { page } from "$app/stores";
    import { goto } from "$app/navigation";

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

<h1>{monsterId}</h1>
<h1>{monster?.name}</h1>
<h1>{monsterId2}</h1>
<h1>{monster2?.name}</h1>

<div class="generations">
    {#each generations as generation (generation.id)}
        <div class="generation">{generation.main_region}</div>
    {/each}
</div>

<div class="monsters">
    {#each data.monsters as monster (monster.id)}
       
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div class="monster">
            <div on:click={() => updateSearchParam("monsterId", monster.id)}>
                <div class="monster-content">
                    <img src={monster.image} alt={monster.name} />
                    {monster.name}
                </div>
                <div class="monster-id">
                    {monster.id}
                </div>
                <div on:click={() => updateSearchParam("monsterId2", monster.id)}>
                    Add Monster 2
                </div>
            </div>
        </div>
    {/each}
</div>

<style>
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

    .monsters {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }
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
</style>