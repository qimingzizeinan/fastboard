<svelte:options immutable />

<script lang="ts">
  import type { FastboardApp } from "@netless/fastboard-core";
  import type { Language, Theme, FastboardUIConfig } from "../../typings";
  import { onMount } from "svelte";
  import { tippy_hide_all } from "../../actions/tippy";
  import RedoUndo from "../RedoUndo";
  import ZoomControl from "../ZoomControl";
  import PageControl from "../PageControl";
  import Toolbar from "../Toolbar";

  export let app: FastboardApp | null | undefined = null;
  export let theme: Theme = "light";
  export let language: Language = "en";
  export let containerRef: ((element: HTMLDivElement | null) => void) | undefined = undefined;
  export let config: FastboardUIConfig = {
    platform: "web",
  };

  const name = "fastboard";
  const AppsShowToolbar = ["DocsViewer", "Slide"];

  let container: HTMLDivElement;
  let layout: "hidden" | "toolbar-only" | "visible" = "hidden";
  let mounted = false;
  let position = "right";

  $: writable = app?.writable;
  $: boxState = app?.boxState;
  $: focusedApp = app?.focusedApp;
  $: platform = config.platform;

  $: if (config.platform === "electron") {
    position = "desktop-right";
  }

  $: if (config.platform === "web") {
    position = "web-left";
  }

  $: if (!$writable) {
    layout = "hidden";
  } else if ($boxState === "maximized") {
    if ($focusedApp && AppsShowToolbar.some(kind => ($focusedApp || "").includes(kind))) {
      layout = "toolbar-only";
    } else {
      layout = "hidden";
    }
  } else {
    layout = "visible";
  }

  $: try {
    if (app && container) {
      app.bindContainer(container);
      mounted = true;
    }
  } catch (err) {
    console.error("[fastboard] An error occurred while binding container");
    console.error(err);
  }

  $: if (app && theme && mounted) {
    app.manager.setPrefersColorScheme(theme);
  }

  onMount(() => {
    if (containerRef) {
      containerRef(container);
      return () => {
        if (containerRef) containerRef(null);
      };
    }
  });

  function focus_me() {
    tippy_hide_all();
    // workaround for some devices that enabled "windows ink"
    let a = document.activeElement as HTMLElement | null;
    a && a.blur && a.blur();
  }
</script>

<div class="{name}-root js-{name}-root" class:loading={!app}>
  <div class="{name}-view" bind:this={container} on:touchstart|capture={focus_me} />
  <div
    class="{name}-right {position} js-tool-bar-change"
    class:hidden={!(layout === "visible" || layout === "toolbar-only")}
  >
    {#if config.toolbar?.enable !== false}
      <Toolbar {app} {theme} {language} {platform} config={config.toolbar} />
    {/if}
  </div>

  <div class="{name}-bottom-left" class:hidden={layout !== "visible"}>
    {#if config.platform === "web"}
      {#if config.redo_undo?.enable !== false}
        <RedoUndo {app} {theme} {language} icons={config.redo_undo?.icons} />
      {/if}
      {#if config.zoom_control?.enable !== false}
        <ZoomControl {app} {theme} {language} icons={config.zoom_control?.icons} />
      {/if}
    {:else if config.platform === "electron"}
      {#if config.redo_undo?.enable !== false}
        <RedoUndo {app} {theme} {language} icons={config.redo_undo?.icons} />
      {/if}
      {#if config.zoom_control?.enable !== false}
        <ZoomControl {app} {theme} {language} icons={config.zoom_control?.icons} />
      {/if}
      {#if config.page_control?.enable !== false}
        <PageControl {app} {theme} {language} icons={config.page_control?.icons} />
      {/if}
    {/if}
  </div>
  <div class="{name}-bottom-right" class:hidden={layout !== "visible"}>
    {#if config.platform === "web"}
      {#if config.page_control?.enable !== false}
        <PageControl {app} {theme} {language} icons={config.page_control?.icons} />
      {/if}
    {:else if config.platform === "electron"}
      {#if config.redo_undo?.enable !== false}
        <RedoUndo {app} {theme} {language} icons={config.redo_undo?.icons} />
      {/if}
      {#if config.zoom_control?.enable !== false}
        <ZoomControl {app} {theme} {language} icons={config.zoom_control?.icons} />
      {/if}
      {#if config.page_control?.enable !== false}
        <PageControl {app} {theme} {language} icons={config.page_control?.icons} />
      {/if}
    {/if}
  </div>
</div>
