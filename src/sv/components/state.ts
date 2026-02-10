import { writable } from "svelte/store";

export const infoStates = {
  my_vorte: {
    title: "MY VORTE",
    description: ["Applikationer avsedda för personligt bruk."],
  },
  rte: {
    title: "Vägen till företagare",
    description: [
      "Vägen till företagare – applikationen fungerar som din guide från affärsidé till att starta företag. Under resans gång går ni steg för steg igenom alla nödvändiga moment och genomför de uppgifter som hör till att starta företag, så att du med klarhet kan inleda din företagsverksamhet.",
      "Centrala steg som behandlas under processen är bland annat grunduppgifter, finansierings- och lönsamhetskalkyl, stiftelsemöte samt registrering av bolaget.",
    ],
  },
  finances: {
    title: "Egen ekonomi",
    description: [
      "Egen ekonomi – applikationen fungerar som ett verktyg för att hantera och planera din privata ekonomi.",
      "Egen ekonomi – applikationen är kopplad till ditt/dina företags ekonomiapplikation så att information från bokföringen överförs till Egen ekonomi. På så sätt håller du dig enkelt uppdaterad om din personliga ekonomi och kan tydligt skilja mellan företagets och din privata ekonomi.",
    ],
  },
  tm: {
    title: "Scheman",
    description: [
      "Scheman – med applikationen kan du enkelt planera din tidsanvändning. Applikationen bygger på en kalender där du kan kategorisera händelser på det sätt du önskar.",
      "Vi planerar även andra verktyg för att effektivisera tidsplaneringen utöver kalendern.",
    ],
  },
  tasks: {
    title: "Uppgifter",
    description: [
      "Uppgifter – med applikationen kan du skapa att-göra-listor samt notera enskilda uppgifter och deras förfallodatum. Om du vill kan du visa dem i kalendern.",
      "Uppgifter – applikationen är även kopplad till andra applikationer, så att du kan kategorisera uppgifter till exempel som en uppgift inom företagets ekonomiapplikation. Dessutom kan du koppla uppgiften till ett specifikt projekt som du har skapat i Projekt-applikationen.",
    ],
  },
  vortepreneur: {
    title: "VORTEPRENEUR",
    description: ["Applikationer avsedda för företagets administration."],
  },
  fms: {
    title: "Ekonomi",
    description: [
      "Ekonomi – applikationen innehåller alla nödvändiga verktyg för att hantera företagets ekonomi, från budgetering till upprättande av bokslut.",
      "Ekonomi – applikationen fungerar sömlöst tillsammans med alla andra applikationer där ekonomirelaterad data hanteras. Till exempel överförs information från kassasystem automatiskt till bokföringen.",
    ],
  },
  marketing: {
    title: "Marknadsföring",
    description: [
      "Marknadsföring – applikationen inkluderar ett verktyg för att skapa webbplatser samt verktyg för att genomföra och följa upp olika marknadsföringskampanjer.",
      "Vi planerar ytterligare marknadsföringsfunktioner inför Vortes första lansering.",
    ],
  },
  pms: {
    title: "Projekt",
    description: [
      "Projekt – med applikationen kan du hantera enskilda projekt. Applikationen samlar all information som rör projektet, såsom projektteam, tidsplanering och uppgifter, kostnadsuppföljning samt kunduppgifter.",
      "Information som kopplas till projekt i andra applikationer överförs automatiskt till Projekt-applikationen.",
    ],
  },
  crm: {
    title: "Kundrelationer",
    description: [
      "Kundrelationer – med applikationen skapas och upprätthålls kundrelationer. Uppgifter om ingångna avtal samt information om befintliga kunder och deras kontaktuppgifter lagras här.",
      "Du kan skapa avtal med kunden, skicka faktura eller skapa en faktureringsregel från samma plats. Uppgifter om fakturor överförs automatiskt till bokföringen.",
    ],
  },
} as const;

export type InfoKeyword = keyof typeof infoStates;
export const infoKeyword = writable<InfoKeyword | null>(null);
let dialogEl: HTMLDialogElement | null = null;
export function setDialogEl(el: HTMLDialogElement) {
  dialogEl = el;
}

export function openDialog(
  event: MouseEvent,
  keyword: InfoKeyword,
  isNamespace: boolean,
) {
  event.stopPropagation();
  if (!dialogEl) return;
  isNamespace ?
    dialogEl.classList.add("namespace")
  : dialogEl.classList.remove("namespace");
  infoKeyword.set(keyword);
  if (!dialogEl.open) {
    dialogEl.showModal();
  }
}
export function closeDialog() {
  dialogEl?.close();
}
