<script lang="ts">
  import INFO from "./INFO.svelte";
  import { InfoKeyword, infoKeyword } from "./state.js";
  const { text, type, keyword } = $props<{
    text: string;
    type: "namespace" | "app";
    keyword: InfoKeyword | "";
  }>();

  let btnEl: HTMLButtonElement | HTMLHeadingElement | null = $state.raw(null);
  let dialogEl: HTMLDialogElement | null = $state.raw(null);

  function openDialog(event: MouseEvent) {
    event.stopPropagation();
    dialogEl?.showModal();
    infoKeyword.set(keyword);
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
  <button class="namespace" bind:this={btnEl}>
    {text}
  </button>
  <dialog class="namespace" bind:this={dialogEl}>
    <INFO />
  </dialog>
{:else}
  <button bind:this={btnEl}>
    {text}
  </button>
  <dialog bind:this={dialogEl}>
    <INFO />
  </dialog>
{/if}

<style>
  button {
    all: unset;
    text-align: center;
    background-color: #0e2f2a;
    padding: 1rem;
    border-radius: 0.5rem;
    width: 120px;
    cursor: pointer;
    font-family: "Inter";
    font-size: small;
    font-weight: 500;
  }
  dialog {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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
  .namespace {
    background-color: #0b2a2f;
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
</style>
