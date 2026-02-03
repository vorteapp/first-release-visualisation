<script lang="ts">
  import { infoKeyword, infoStates } from "./state.js";
</script>

{#if $infoKeyword}
  <div>
    <h3>{infoStates[$infoKeyword].title}</h3>
    <p>
      {infoStates[$infoKeyword].description}
    </p>
  </div>
{/if}

<style>
</style>
