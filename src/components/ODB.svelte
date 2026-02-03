<script lang="ts">
  import INFO from "./INFO.svelte";
  import { infoKeyword } from "./state.js";
  const { text, type } = $props<{ text: string; type: "namespace" | "app" }>();

  let btnEl: HTMLButtonElement | HTMLHeadingElement | null = $state.raw(null);
  let dialogEl: HTMLDialogElement | null = $state.raw(null);

  function openDialog(event: MouseEvent) {
    event.stopPropagation();
    dialogEl?.showModal();
    infoKeyword.set("vortepreneur");
  }

  function handleBodyClick(event: MouseEvent) {
    if (dialogEl?.open) {
      dialogEl.close();
    }
  }

  $effect(() => {
    if (!btnEl || !dialogEl) return;

    btnEl.addEventListener("click", openDialog);
    document.body.addEventListener("click", handleBodyClick);

    return () => {
      btnEl.removeEventListener("click", openDialog);
      document.body.removeEventListener("click", handleBodyClick);
    };
  });
</script>

{#if type === "namespace"}
  <h3 bind:this={btnEl}>
    {text}
  </h3>
{:else}
  <button bind:this={btnEl}>
    {text}
  </button>
{/if}

<dialog bind:this={dialogEl}>
  <INFO />
</dialog>

<style>
  button {
    all: unset;
    text-align: center;
    background-color: #199473;
    padding: 1rem;
    border-radius: 1rem;
    width: 200px;
    cursor: pointer;
  }
  dialog {
    border: none;
    overflow: hidden;
    background-color: #199473;
    width: 300px;
    height: 300px;
    padding: 1rem;
    border-radius: 1rem;
  }
</style>
