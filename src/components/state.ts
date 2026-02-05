import { writable } from "svelte/store";

export const infoStates = {
  my_vorte: {
    title: "MY VORTE",
    description: ["Henkilökohtaiseen käyttöön tarkoitetut sovellukset."],
  },
  rte: {
    title: "Polku yrittäjäksi",
    description: [
      "Polku yrittäjäksi - sovellus toimii sinulle reittinä yritysidean synnystä yrityksen perustamiseen asti. Polun aikana käydään läpi vaiheittain kaikki tarvittavat asiat, ja hoidetaan tarvittavat tehtävät, joita yrityksen perustamiseen liittyy, jotta voit selkein mielin aloittaa yritystoimintasi.",
      "Polun aikana läpi käytäviä yritystoiminnan käynnistämisen keskeisiä vaiheita ovat muun muassa perustiedot, rahoitus- ja kannattavuuslaskelma, perustamiskokous sekä yhtiön rekisteröinti.",
    ],
  },
  finances: {
    title: "Oma talous",
    description: [
      "Oma talous - sovellus toimii oman taloutesi hallinnointi ja suunnittelu työkaluna.",
      "Oma talous - sovellus on liitetty yrityksesi / yritystesi talous - sovellukseen siten, että kirjanpidosta kulkeutuu tieto Oma talous - sovellukseen. Näin pysyt ajantasalla myös henkilökohtaisesta taloudestasi helposti ja erotat selkeästi yrityksen ja oman taloutesi toisistaan.",
    ],
  },
  tm: {
    title: "Aikataulut",
    description: [
      "Aikataulut - sovelluksella voit helposti suunnitella ajankäyttösi. Sovelluksen pohjana on kalenteri, jossa voit kategorisoida tapahtumat haluamallasi tavalla.",
      "Suunnittelemme vielä muita työkaluja, joilla ajanhallintaa voisi tehostaa kalenterin lisäksi.",
    ],
  },
  tasks: {
    title: "Tehtävät",
    description: [
      "Tehtävät - sovelluksella voit luoda tehtävälistoja sekä laittaa muistiin yksittäisiä tehtäviä ja niiden eräpäiviä. Halutessasi saat nämä näkymään kalenteriin.",
      "Tehtävät - sovellus on yhteydessä myös muihin sovelluksiin, joten voit kategorisoida tehtävät halutessasi tietyn sovelluksen, kuten esim. yrityksen talous - sovelluksen tehtäväksi. Lisäksi voit kategorisoida tehtävän tietyn projektin alle, jonka olet luonut projektit -  sovelluksessa.",
    ],
  },
  vortepreneur: {
    title: "VORTEPRENEUR",
    description: ["Yrityksen hallinnointiin tarkoitetut sovellukset."],
  },
  fms: {
    title: "Talous",
    description: [
      "Talous - sovellus sisältää yrityksen talouden hallinnan kaikki tarvittavat työkalut budjetoinnista tilinpäätöksen tekoon.",
      "Talous - sovellus toimii saumattomasti kaikkien muiden sovellusten kanssa, jossa käsitellään talouteen liittyvää dataa. Näin esimerkiksi kassoista kulkeutuu tieto automaattisesti kirjanpitoon asti.",
    ],
  },
  marketing: {
    title: "Markkinointi",
    description: [
      "Markkinointi - sovellukseen kuuluu verkkosivu työkalu sekä erilaisten markkinointi kampanjoiden toteutus- ja seuranta työkalut.",
      "Suunnittelemme vielä Vorten ensimmäiseen julkaisuun tulevia markkinoinnin ominaisuuksia.",
    ],
  },
  pms: {
    title: "Projektit",
    description: [
      "Projektit - sovelluksella voit hallinnoida yksittäisiä projekteja. Sovellus kokoaa yhteen kaiken projektiin liittyvän tiedon, kuten projektin tiimin, aikataulutuksen ja tehtävät, kulujen seurannan sekä asiakkaan tiedot.",
      "Projektit sovellukseen kulkeutuu kaikissa muissa sovelluksissa projektiin liitetty tieto.",
    ],
  },
  crm: {
    title: "Asiakkuudet",
    description: [
      "Asiakkuudet - sovelluksella muodostetaan ja ylläpidetään asiakassuhteita. Tiedot tehdyistä sopimuksista ja tiedot olemassa olevista asiakkaista ja yhteystiedoista säilyvät täällä.",
      "Voit muodostaa sopimuksen asiakkaan kanssa, lähettää hänelle laskun / muodostaa laskutus säännön samasta paikasta. Tiedot laskuista kulkeutuvat kirjanpitoon automaattisesti.",
    ],
  },
} as const;

export type InfoKeyword = keyof typeof infoStates;
export const infoKeyword = writable<InfoKeyword | null>(null);
