<script>
    import { page } from "$app/stores";
    import { caughtMonsters } from "$lib/stores";
</script>

<div class="navbar">
    <a href="/" class:active={$page.url.pathname == "/"}>
        Home
    </a>
    <a href="/my-monsters/" class:active={$page.url.pathname == "/my-monsters"}>
        My Monsters ({$caughtMonsters.length})
    </a>
</div>

<div class="container">
    <slot />
</div>

<style>
    .navbar {
        display: flex;
        justify-content: space-between;
        background-color: #333;
        color: #fff;
        padding: 10px;
    }
    .navbar a {
       color: #fff;
       text-decoration: none;
       padding: 4px;
    }
    .navbar a.active {
       color: rgb(32, 136, 239);
    }
    .navbar a:hover {
        color: rgb(32, 136, 239);
    }

    :global(body) {
        margin: 0;
    }
    .container {
        margin: 0 auto;
        max-width: 90%;
        width: 1200px;
    }
</style>