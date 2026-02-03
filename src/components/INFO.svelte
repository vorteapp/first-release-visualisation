<script lang="ts">
  import { infoKeyword, infoStates } from "./state.js";
</script>

{#if $infoKeyword}
  <div class="inner">
    <h3>{infoStates[$infoKeyword].title}</h3>
    <p>
      {infoStates[$infoKeyword].description}
    </p>
  </div>
{/if}

<style>
  div.inner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
  }
  h3,
  p {
    padding: 0;
    margin: 0;
  }
</style>
