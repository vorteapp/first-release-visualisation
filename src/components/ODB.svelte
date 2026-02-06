<script lang="ts">
  import { InfoKeyword, openDialog, closeDialog } from "./state.js";
  const { text, type, keyword } = $props<{
    text: string;
    type: "namespace" | "app";
    keyword: InfoKeyword | "";
  }>();

  let btnEl: HTMLButtonElement | HTMLHeadingElement | null = $state.raw(null);

  function handleBodyClick() {
    closeDialog();
  }
  function handleBtnClick(ev: MouseEvent) {
    openDialog(ev, keyword, type === "namespace");
  }
  $effect(() => {
    if (!btnEl) return;

    btnEl.addEventListener("click", handleBtnClick);
    document.body.addEventListener("click", handleBodyClick);

    return () => {
      btnEl.removeEventListener("click", handleBtnClick);
      document.body.removeEventListener("click", handleBodyClick);
    };
  });
</script>

{#if type === "namespace"}
  <button class="namespace" bind:this={btnEl}>
    {text}
  </button>
{:else}
  <button bind:this={btnEl}>
    {text}
  </button>
{/if}

<style>
  button {
    all: unset;
    text-align: center;
    background-color: #0e2f2a;
    padding: 1rem;
    border-radius: 0.5rem;
    width: 100px;
    cursor: pointer;
    font-family: "Inter";
    font-size: x-small;
    font-weight: 900;
  }

  @media (orientation: landscape) {
    button {
      width: 150px;
      font-size: medium;
    }
  }
  button.namespace {
    background-color: #0b2a2f;
  }
</style>
