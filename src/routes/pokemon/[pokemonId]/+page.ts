import type { PageLoad } from "../$types";

export type FullMonster = {
    // images:
}

export const load = (async ({ fetch, url }) => {  
    const monsterId = isNaN(Number(url.pathname.split("/").at(-1))) ? 4 : Number(url.pathname.split("/").at(-1));
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${monsterId}`);
    let json = await response.json();
    
    return {
        images: json.sprites,
        test: monsterId
    }
}) satisfies PageLoad