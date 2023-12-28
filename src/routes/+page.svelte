<script lang="ts">
    import type { PageData } from "./$types.js";
    import { generations } from "./generations";

    export let data: PageData;
</script>

{#each data.monsters as monster (monster.url)}
    <p>{monster.id}: {monster.name}</p>
{/each}

{#each generations as generation (generation.id)}
    <h1>{generation.name}</h1>
    <p>Games: {generation.games.join(", ")}</p>
    <p>Main Region: {generation.main_region}</p>
{/each}