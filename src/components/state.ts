import { writable } from "svelte/store";

export const infoStates = {
  my_vorte: {
    title: "MY VORTE",
    description: "",
  },
  vortepreneur: {
    title: "VORTEPRENEUR",
    description: "",
  },
} as const;

export type InfoKeyword = keyof typeof infoStates;
export const infoKeyword = writable<InfoKeyword | null>(null);
