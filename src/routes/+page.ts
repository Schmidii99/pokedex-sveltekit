import type { PageLoad } from "./$types";

type ApiMonster = {
    name: string,
    url: string
}

export type IndexMonster = ApiMonster & {
    id: string,
    image: string
}

export const load = (async ({ fetch, url }) => {    
    const generationId = url.searchParams.get("generation_id") || "1";

    let monsterArray: IndexMonster[] = [];
    let json;

    if (generationId == 'all') {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20000");
        json = (await response.json()).results;
    }
    else {
        const generationResponse = await fetch(`https://pokeapi.co/api/v2/generation/${generationId}`);
        json = (await generationResponse.json()).pokemon_species;
    }

    monsterArray = json.map((monster: ApiMonster) => {
        const splitUrl: string[] = monster.url.split("/");
        const id: number = Number(splitUrl[splitUrl.length - 2]);
        return {
            name: monster.name,
            url: monster.url,
            id,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
        }
    });

    return {
        monsters: monsterArray
    }
}) satisfies PageLoad