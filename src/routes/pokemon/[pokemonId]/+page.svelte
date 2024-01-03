<script lang="ts">
    import { page } from "$app/stores";
    import type { PageData } from "../$types";

    export let data: PageData;
    $: images = data.images;
</script>

<div class="container">
    <h1>{$page.params.pokemonId}</h1>
    <br>
    <div class="images">
        {#if images.front_default}
            <div class="image">
                <div class="image-content">
                    <img src={images.front_default} alt="front_default" />
                    default front
                </div>
            </div>
        {/if}
        {#if images.back_default}
            <div class="image">
                <div class="image-content">
                    <img src={images.back_default} alt="back_default" />
                    default back
                </div>
            </div>
        {/if}
        {#if images.front_female}
            <div class="image">
                <div class="image-content">
                    <img src={images.front_female} alt="front_female" />
                    female front
                </div>
            </div>
        {/if}
        {#if images.back_female}
            <div class="image">
                <div class="image-content">
                    <img src={images.back_female} alt="back_female" />
                    female back
                </div>
            </div>
        {/if}
        {#if images.front_shiny}
            <div class="image">
                <div class="image-content">
                    <img src={images.front_shiny} alt="front_shiny" />
                    shiny front
                </div>
            </div>
        {/if}
        {#if images.back_shiny}
            <div class="image">
                <div class="image-content">
                    <img src={images.back_shiny} alt="back_shiny" />
                    shiny back
                </div>
            </div>
        {/if}
        {#if images.front_shiny_female}
            <div class="image">
                <div class="image-content">
                    <img src={images.front_shiny_female} alt="front_shiny_female" />
                    shiny female front
                </div>
            </div>
        {/if}
        {#if images.back_shiny_female}
            <div class="image">
                <div class="image-content">
                    <img src={images.back_shiny_female} alt="back_shiny_female" />
                    shiny female back
                </div>
            </div>
        {/if}

    </div>
</div>


<style>
    .image {
        width: 100px;
        margin: 10px;
        padding: 10px;
        position: relative;
        background-color: #eee;
    }
    .image-content {
        display: flex;
        flex-direction: column;
        align-items: center;
    } 
    .images {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }
</style>