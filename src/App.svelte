<script lang="ts">
  import ODB from "./components/ODB.svelte";
</script>

<section>
  <div>
    <ODB type="app" text="Polku Yrittäjäksi" />
    <ODB type="app" text="Oma Talous" />
  </div>
  <ODB type="namespace" text="MY VORTE" />
  <div>
    <ODB type="app" text="Tehtävien Hallinta" />
    <ODB type="app" text="Ajan Hallinta" />
  </div>
</section>

<section>
  <div>
    <ODB type="app" text="Taloushallinto" />
    <ODB type="app" text="Markkinointi Työkalut" />
  </div>
  <ODB type="namespace" text="VORTEPRENEUR" />
  <div>
    <ODB type="app" text="Projektien Hallinta" />
    <ODB type="app" text="Asiakkuudet" />
  </div>
</section>

<style>
  :root {
    width: clamp(100%, 100%, 100%);
    height: clamp(100%, 100%, 100%);
    overflow: hidden;
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
    height: clamp(100%, 100%, 100%);
    overflow: hidden;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
    gap: 2rem;
  }
  :global(section) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }
  :global(div) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }
</style>
