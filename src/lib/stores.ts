import { writable } from "svelte/store";
import type { Writable } from "svelte/store";
import type { IndexMonster } from "../routes/+page";

export const caughtMonsters: Writable<IndexMonster[]> = writable([]);