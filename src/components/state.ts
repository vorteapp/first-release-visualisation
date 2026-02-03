import { writable } from "svelte/store";

export const infoStates = {
  my_vorte: {
    title: "MY VORTE",
    description: "Henkilökohtaiseen käyttöön tarkoitetut sovellukset.",
  },
  rte: {
    title: "Polku yrittäjäksi",
    description:
      "Polku yrittäjäksi - sovellus toimii sinulle reittinä yritysidean synnystä yrityksen perustamiseen asti. Polun aikana käydään läpi vaiheittain kaikki tarvittavat asiat, ja hoidetaan tarvittavat tehtävät, joita yrityksen perustamiseen liittyy, jotta voit selkein mielin aloittaa yritystoimintasi.\n\nPolun aikana läpi käytäviä yritystoiminnan käynnistämisen keskeisiä vaiheita ovat muun muassa perustiedot, rahoitus- ja kannattavuuslaskelma, perustamiskokous sekä yhtiön rekisteröinti.",
  },
  finances: {
    title: "Oma talous",
    description:
      "Oma talous- sovellus toimii oman taloutesi hallinnointi ja suunnittelu työkaluna.\n\nOma talous - sovellus on liitetty yrityksesi / yritystesi taloushallintoon siten, että kirjanpidosta kulkeutuu tieto Oma talous - sovellukseen. Näin pysyt ajantasalla myös henkilökohtaisesta taloudestasi helposti ja erotat selkeästi yrityksen ja oman taloutesi toisistaan.",
  },
  tm: {
    title: "Ajanhallinta",
    description:
      "Ajanhallinta- sovelluksella voit helposti suunnitella ajankäyttösi. Ajanhallinta sovelluksen pohjana on kalenteri, jossa voit kategorisoida tapahtumat haluamallasi tavalla.\n\nSuunnittelemme vielä muita työkaluja, joilla ajanhallintaa voisi tehostaa kalenterin lisäksi.",
  },
  tasks: {
    title: "Tehtävien hallinta",
    description:
      "Tehtävien hallinta - sovelluksella voit luoda tehtävälistoja sekä laittaa muistiin yksittäisiä tehtäviä ja niiden eräpäiviä. Halutessasi saat nämä näkymään kalenteriin.\n\nTehtävien hallinta - sovellus on yhteydessä myös muihin sovelluksiin, joten voit kategorisoida tehtävät halutessasi tietyn sovelluksen, kuten esim. taloushallinnon tehtäväksi. Lisäksi voit kategorisoida tehtävän tietyn projektin alle, jonka olet luonut projektien hallinta sovelluksessa.",
  },
  vortepreneur: {
    title: "VORTEPRENEUR",
    description: "Yrityksen hallinnointiin tarkoitetut sovellukset.",
  },
  fms: {
    title: "Taloushallinto",
    description:
      "Taloushallinto-sovellus sisältää yrityksen talouden hallinnan kaikki tarvittavat työkalut budjetoinnista tilinpäätöksen tekoon, mahdollisimman pitkälle automatisoituna.",
  },
  pms: {
    title: "",
    description: "",
  },
  crm: {
    title: "",
    description: "",
  },
  marketing: {
    title: "",
    description: "",
  },
} as const;

export type InfoKeyword = keyof typeof infoStates;
export const infoKeyword = writable<InfoKeyword | null>(null);
