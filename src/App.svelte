<script lang="ts">
  import ODB from "./components/ODB.svelte";
</script>

<section>
  <div>
    <ODB type="app" text="Polku Yrittäjäksi" keyword="rte" />
    <ODB type="app" text="Oma Talous" keyword="finances" />
  </div>
  <ODB type="namespace" text="MY VORTE" keyword="my_vorte" />
  <div>
    <ODB type="app" text="Tehtävien Hallinta" keyword="tasks" />
    <ODB type="app" text="Ajan Hallinta" keyword="tm" />
  </div>
</section>

<section>
  <div>
    <ODB type="app" text="Taloushallinto" keyword="fms" />
    <ODB type="app" text="Markkinointi" keyword="marketing" />
  </div>
  <ODB type="namespace" text="VORTEPRENEUR" keyword="vortepreneur" />
  <div>
    <ODB type="app" text="Projektien Hallinta" keyword="pms" />
    <ODB type="app" text="Asiakkuudet" keyword="crm" />
  </div>
</section>

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
    gap: 4rem;
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
</style>
