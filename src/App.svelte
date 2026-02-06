<script lang="ts">
  import ODB from "./components/ODB.svelte";
  import { setDialogEl } from "./components/state";
  let dialogEl: HTMLDialogElement;
  setDialogEl(dialogEl);
</script>

<section>
  <div>
    <ODB type="app" text="Polku yrittäjäksi" keyword="rte" />
    <ODB type="app" text="Oma talous" keyword="finances" />
  </div>
  <ODB type="namespace" text="MY VORTE" keyword="my_vorte" />
  <div>
    <ODB type="app" text="Tehtävät" keyword="tasks" />
    <ODB type="app" text="Aikataulut" keyword="tm" />
  </div>
</section>

<section>
  <div>
    <ODB type="app" text="Talous" keyword="fms" />
    <ODB type="app" text="Markkinointi" keyword="marketing" />
  </div>
  <ODB type="namespace" text="VORTEPRENEUR" keyword="vortepreneur" />
  <div>
    <ODB type="app" text="Projektit" keyword="pms" />
    <ODB type="app" text="Asiakkuudet" keyword="crm" />
  </div>
</section>

<dialog bind:this={dialogEl} class="namespace"></dialog>

<style>
  :root {
    width: clamp(100%, 100%, 100%);
    min-height: max-content;
    overflow: visible;
    background-color: black;
    color: #ffffff;
    font-family:
      system-ui,
      -apple-system,
      BlinkMacSystemFont,
      "Segoe UI",
      Roboto,
      Oxygen,
      Ubuntu,
      Cantarell,
      "Open Sans",
      "Helvetica Neue",
      sans-serif;
  }
  :global(body) {
    width: clamp(100%, 100%, 100%);
    min-height: max-content;
    overflow: visible;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    align-content: center;
    position: relative;
    flex-wrap: wrap;
    gap: 2rem;
    padding: 10rem 0rem;
    margin: 0;
  }
  :global(section) {
    max-width: 100%;
    margin: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
    gap: 2rem;
  }
  :global(div) {
    max-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
    gap: 2rem;
  }
  dialog {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    border: none;
    overflow: hidden;
    background-color: #0e2f2a;
    color: #ffffff;
    width: 300px;
    max-width: 90%;
    min-height: max-content;
    padding: 1rem;
    border-radius: 0.5rem;
  }
  dialog {
    opacity: 0;
    scale: 0.7;
    transition:
      opacity 0.4s ease-out,
      scale 0.4s ease-out,
      overlay 0.4s ease-out allow-discrete,
      display 0.4s ease-out allow-discrete;
  }

  dialog[open] {
    opacity: 1;
    scale: 1;
  }

  @starting-style {
    dialog[open] {
      opacity: 0;
      scale: 0.7;
    }
  }

  dialog::backdrop {
    background-color: rgba(0, 0, 0, 0);
    transition:
      display 0.4s allow-discrete,
      overlay 0.4s allow-discrete,
      background-color 0.4s;
  }

  dialog[open]::backdrop {
    background-color: rgba(0, 0, 0, 0.5);
  }

  @starting-style {
    dialog[open]::backdrop {
      background-color: rgba(0, 0, 0, 0);
    }
  }
  dialog.namespace {
    background-color: #0b2a2f;
  }
</style>
