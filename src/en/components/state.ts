import { writable } from "svelte/store";

export const infoStates = {
  my_vorte: {
    title: "MY VORTE",
    description: ["Applications intended for personal use."],
  },
  rte: {
    title: "Road to Entrepreneurship",
    description: [
      "Road to Entrepreneurship – the application serves as your guide from the birth of a business idea to establishing a company. Along the way, you go step by step through all the necessary matters and complete the required tasks related to starting a business, so you can begin your entrepreneurial journey with clarity and confidence.",
      "Key stages covered during the process include basic information, financing and profitability calculations, the founding meeting, and company registration.",
    ],
  },
  finances: {
    title: "Personal Finances",
    description: [
      "Personal Finances – the application functions as a tool for managing and planning your personal economy.",
      "Personal Finances – the application is connected to your company’s financial application so that bookkeeping data flows into Personal Finances. This allows you to easily stay up to date with your personal finances and clearly separate your company’s finances from your own.",
    ],
  },
  tm: {
    title: "Schedules",
    description: [
      "Schedules – with the application, you can easily plan your time usage. The application is built around a calendar where you can categorize events in any way you prefer.",
      "We are also planning additional tools to further enhance time management beyond the calendar.",
    ],
  },
  tasks: {
    title: "Tasks",
    description: [
      "Tasks – with the application, you can create task lists as well as record individual tasks and their due dates. If you wish, you can display them in the calendar.",
      "Tasks – the application is also connected to other applications, allowing you to categorize tasks, for example, as tasks within the company’s financial application. Additionally, you can assign a task to a specific project that you have created in the Projects application.",
    ],
  },
  vortepreneur: {
    title: "VORTEPRENEUR",
    description: ["Applications intended for company management."],
  },
  fms: {
    title: "Finance",
    description: [
      "Finance – the application includes all the necessary tools for managing a company’s finances, from budgeting to preparing financial statements.",
      "Finance – the application works seamlessly with all other applications that handle financial data. For example, information from cash registers flows automatically into bookkeeping.",
    ],
  },
  marketing: {
    title: "Marketing",
    description: [
      "Marketing – the application includes a website builder as well as tools for executing and tracking various marketing campaigns.",
      "We are planning additional marketing features for Vorte’s first release.",
    ],
  },
  pms: {
    title: "Projects",
    description: [
      "Projects – with the application, you can manage individual projects. The application brings together all project-related information, such as the project team, scheduling and tasks, expense tracking, and client details.",
      "Information linked to a project in other applications automatically flows into the Projects application.",
    ],
  },
  crm: {
    title: "Customer Relationships",
    description: [
      "Customer Relationships – the application is used to create and maintain customer relationships. Information about concluded agreements, existing customers, and their contact details is stored here.",
      "You can create an agreement with a customer, send an invoice, or set up a billing rule from the same place. Invoice data flows automatically into bookkeeping.",
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
