<script lang="ts">
  import type { Appliance, FastboardApp } from "@netless/fastboard-core";
  import type { Writable } from "svelte/store";
  import type { Placement } from "tippy.js";
  import type { Language, Theme } from "../../../typings";
  import type { Shape, Eraser } from "./constants";
  import { eraserIcon, eraserIconActive, applianceShapes, shapesIcon, shapesIconActive } from "./constants";
  import { writable } from "svelte/store";
  import { scrollHeight } from "../../../actions/height";
  import { scrollTop } from "../../../actions/scroll";
  import { tippy_hide_all } from "../../../actions/tippy";
  import { clamp } from "../../helpers";
  import { i18n } from "./constants";
  import { stockedApps } from "../../../behaviors";
  import { tooltip } from "./helper";
  import Icons from "../../Icons";
  import Button from "../../Button";
  import StrokeWidth from "./StrokeWidth.svelte";
  import StrokeColor from "./StrokeColor.svelte";
  import PencilEraserSize from "./PencilEraserSize.svelte";
  import TextColor from "./TextColor.svelte";
  import Shapes from "./Shapes.svelte";
  import useToolbarDrag from "./useToolbarDrag";

  import {} from "os";
  import type { ToolbarItem } from "..";

  export let platform: "web" | "electron" = "web";
  export let app: FastboardApp | null | undefined = null;
  export let theme: Theme = "light";
  export let language: Language = "en";
  export let disabled = false;
  export let scroll_height: Writable<number>;
  export let computed_height = 0;
  export let scrollable = false;
  export let hide_apps = false;
  export let eraser_type: "delete" | "pencil" | "both" = "both";
  export let toolBarList: ToolbarItem[];

  useToolbarDrag();

  const name = "fastboard-toolbar";

  let last_shape: Shape = "rectangle";
  let last_eraser: Eraser = "pencilEraser";

  let pencil_panel: HTMLDivElement;
  let text_panel: HTMLDivElement;
  let shapes_panel: HTMLDivElement;
  let eraser_panel: HTMLDivElement;
  let apps_panel: HTMLDivElement;

  let btn_props: { name: string; theme: Theme; disabled: boolean; placement: Placement };
  $: btn_props = { name, theme, disabled, placement: "right" };
  $: t = i18n[language];
  $: hotkeys = app?.hotKeys;
  $: c = {
    clicker: tooltip(t.clicker, hotkeys?.changeToClick),
    selector: tooltip(t.selector, hotkeys?.changeToSelector),
    pencil: tooltip(t.pencil, hotkeys?.changeToPencil),
    eraser: tooltip(t.eraser, hotkeys?.changeToEraser),
    pencilEraser: tooltip(t.pencilEraser, hotkeys?.changeToPencilEraser),
    eraserForPanel: tooltip(t.eraser, hotkeys?.changeToEraser),
    pencilEraserForPanel: tooltip(t.pencilEraser, hotkeys?.changeToPencilEraser),
    text: tooltip(t.text, hotkeys?.changeToText),
  };
  $: memberState = app?.memberState;
  $: appliance = $memberState?.currentApplianceName;
  $: shape = $memberState?.shapeType;
  $: status = app?.appsStatus;
  $: shareActive = false;

  $: if (applianceShapes.includes(appliance as Appliance)) {
    last_shape = appliance as Shape;
  } else if (shape) {
    last_shape = shape;
  }

  $: if (["pencilEraser", "eraser"].includes(appliance as Appliance)) {
    last_eraser = appliance as "pencilEraser" | "eraser";
  }

  $: max_scroll = scrollable ? $scroll_height + (32 + 8) * 2 - computed_height : 0;

  let top = writable(0);

  function setShareActive(status: boolean) {
    shareActive = status;
  }

  function scroll_up() {
    $top = clamp($top - 32 - 4, 0, max_scroll);
  }
  function scroll_down() {
    $top = clamp($top + 32 + 4, 0, max_scroll);
  }

  function clicker() {
    app?.setAppliance("clicker");
  }
  function selector() {
    app?.setAppliance("selector");
  }
  function pencil() {
    app?.setAppliance("pencil");
  }
  function text() {
    app?.setAppliance("text");
  }
  function select_last_shape() {
    console.log("[debug] last_shape", applianceShapes);
    if (applianceShapes.includes(last_shape as Appliance)) {
      app?.setAppliance(last_shape as Appliance);
    } else {
      app?.setAppliance("shape", last_shape as Exclude<Shape, Appliance>);
    }
  }
  function select_last_eraser() {
    app?.setAppliance(last_eraser);
  }
  function select_eraser() {
    app?.setAppliance("eraser");
  }
  function select_pencil_eraser() {
    app?.setAppliance("pencilEraser");
  }
  function clear() {
    app?.cleanCurrentScene();
  }
</script>

{#if scrollable}
  <Button class="scroll-up" {...btn_props} on:click={scroll_up}>
    <Icons.Up {theme} />
  </Button>
{/if}

<div class="{name}-scrollable" class:scrollable use:scrollHeight={scroll_height} use:scrollTop={top}>
  <div class="toolbar-divider"></div>
  {#if toolBarList.length > 0}
    {#each toolBarList as item}
      {#if item.type === "clicker"}
        <Button
          class="clicker"
          active={appliance === "clicker"}
          {...btn_props}
          on:click={clicker}
          content={c.clicker}
        >
          {#if appliance === "clicker"}
            <Icons.ClickFilled {theme} active />
          {:else}
            <Icons.Click {theme} />
          {/if}
          <div class="mt8">{t.clicker}</div>
        </Button>
      {:else if item.type === "freedom"}
        <div class="free-move js-free-move">
          <Icons.Drag {theme} />
        </div>
      {:else if item.type === "selector"}
        <Button
          class="selector"
          active={appliance === "selector"}
          {...btn_props}
          on:click={selector}
          content={c.selector}
        >
          {#if appliance === "selector"}
            <Icons.SelectorFilled {theme} active />
          {:else}
            <Icons.Selector {theme} />
          {/if}
          <div class="mt8">{t.selector}</div>
        </Button>
      {:else if item.type === "pencil"}
        <Button
          class="pencil"
          active={appliance === "pencil"}
          {...btn_props}
          on:click={pencil}
          content={c.pencil}
          menu={pencil_panel}
        >
          {#if appliance === "pencil"}
            <Icons.PencilFilled {theme} active />
          {:else}
            <Icons.Pencil {theme} />
          {/if}
          <div class="mt8">{t.pencil}</div>
        </Button>
      {:else if item.type === "text"}
        <Button
          class="text"
          active={appliance === "text"}
          {...btn_props}
          on:click={text}
          content={c.text}
          menu={text_panel}
        >
          {#if appliance === "text"}
            <Icons.TextFilled {theme} active />
          {:else}
            <Icons.Text {theme} />
          {/if}
          <div class="mt8">{t.text}</div>
        </Button>
      {:else if item.type === "shapes"}
        <Button
          class="shapes"
          active={appliance === last_shape || (appliance === "shape" && shape === last_shape)}
          {...btn_props}
          on:click={select_last_shape}
          content={t.shapes}
          menu={shapes_panel}
        >
          {#if appliance === last_shape || (appliance === "shape" && shape === last_shape)}
            <div class="active-wrap">
              <svelte:component this={shapesIconActive[last_shape]} {theme} active />
            </div>
          {:else}
            <svelte:component this={shapesIcon[last_shape]} {theme} />
          {/if}

          <div class="mt8">{t.shapes}</div>
        </Button>
      {:else if item.type === "eraser"}
        {#if eraser_type === "delete"}
          <Button
            class="eraser"
            active={appliance === "eraser"}
            {...btn_props}
            on:click={select_eraser}
            content={c.eraser}
          >
            {#if appliance === "eraser"}
              <Icons.EraserFilled {theme} active />
            {:else}
              <Icons.Eraser {theme} />
            {/if}
            <div class="mt8">{c.eraser}</div>
          </Button>
        {:else if eraser_type === "pencil"}
          <Button
            class="eraser"
            active={appliance === "pencilEraser"}
            {...btn_props}
            on:click={select_pencil_eraser}
            content={c.pencilEraser}
            menu={eraser_panel}
          >
            {#if appliance === "pencilEraser"}
              <Icons.PencilEraserFilled {theme} active />
            {:else}
              <Icons.PencilEraser {theme} />
            {/if}
            <div class="mt8">{c.pencilEraser}</div>
          </Button>
        {:else}
          <Button
            class="eraser"
            active={appliance === last_eraser}
            {...btn_props}
            on:click={select_last_eraser}
            content={t[last_eraser]}
            menu={eraser_panel}
          >
            {#if appliance === last_eraser}
              <svelte:component this={eraserIconActive[last_eraser]} {theme} active />
            {:else}
              <svelte:component this={eraserIcon[last_eraser]} {theme} />
            {/if}
            <div class="mt8">{t[last_eraser]}</div>
          </Button>
        {/if}
      {:else if item.type === "clear"}
        <Button class="clear" {...btn_props} on:click={clear} content={t.clear}>
          <Icons.Clear {theme} />
          <div class="mt8">{t.clear}</div>
        </Button>
      {:else if item.type === "courseware"}
        <Button class="courseware" {...btn_props} on:click={item.onClick} content={t.courseware}>
          <Icons.Courseware {theme} />
          <div class="mt8">{t.courseware}</div>
        </Button>
      {:else if item.type === "share"}
        <Button
          class="share"
          active={shareActive}
          {...btn_props}
          on:click={() => {
            item.onClick?.(shareActive, setShareActive);
          }}
          content={t.share}
        >
          {#if shareActive}
            <Icons.ShareFilled {theme} active />
          {:else}
            <Icons.Share {theme} />
          {/if}
          <div class="mt8">{t.share}</div>
        </Button>
      {:else if item.type === "apps"}
        {#if !hide_apps}
          <Button class="apps" {...btn_props} content={t.apps} menu={apps_panel} menu_placement="right-end">
            <Icons.Apps {theme} />
            <div class="mt8">{t.more}</div>
          </Button>
        {/if}
      {:else if item.type === "desktop-change" && platform === "electron"}
        <Button
          class="desktop-change"
          {...btn_props}
          content={t.apps}
          on:click={() => {
            const classList = document.querySelector(".js-tool-bar-change")?.classList;
            if (!classList) return;
            classList.toggle("desktop-right");
            classList.toggle("desktop-left");
          }}
        >
          <Icons.Change {theme} />
        </Button>
      {:else if item.type === "custom"}
        {#if item.content}
          {@html item.content}
        {/if}
      {/if}
    {/each}
  {:else}
    <Button
      class="clicker"
      active={appliance === "clicker"}
      {...btn_props}
      on:click={clicker}
      content={c.clicker}
    >
      {#if appliance === "clicker"}
        <Icons.ClickFilled {theme} active />
      {:else}
        <Icons.Click {theme} />
      {/if}
    </Button>
    <Button
      class="selector"
      active={appliance === "selector"}
      {...btn_props}
      on:click={selector}
      content={c.selector}
    >
      {#if appliance === "selector"}
        <Icons.SelectorFilled {theme} active />
      {:else}
        <Icons.Selector {theme} />
      {/if}
    </Button>
    <Button
      class="pencil"
      active={appliance === "pencil"}
      {...btn_props}
      on:click={pencil}
      content={c.pencil}
      menu={pencil_panel}
    >
      {#if appliance === "pencil"}
        <Icons.PencilFilled {theme} active />
      {:else}
        <Icons.Pencil {theme} />
      {/if}
    </Button>
    <Button
      class="text"
      active={appliance === "text"}
      {...btn_props}
      on:click={text}
      content={c.text}
      menu={text_panel}
    >
      {#if appliance === "text"}
        <Icons.TextFilled {theme} active />
      {:else}
        <Icons.Text {theme} />
      {/if}
    </Button>
    <Button
      class="shapes"
      active={appliance === last_shape || (appliance === "shape" && shape === last_shape)}
      {...btn_props}
      on:click={select_last_shape}
      content={t.shapes}
      menu={shapes_panel}
    >
      {#if appliance === last_shape || (appliance === "shape" && shape === last_shape)}
        <svelte:component this={shapesIconActive[last_shape]} {theme} active />
      {:else}
        <svelte:component this={shapesIcon[last_shape]} {theme} />
      {/if}
    </Button>
    {#if eraser_type === "delete"}
      <Button
        class="eraser"
        active={appliance === "eraser"}
        {...btn_props}
        on:click={select_eraser}
        content={c.eraser}
      >
        {#if appliance === "eraser"}
          <Icons.EraserFilled {theme} active />
        {:else}
          <Icons.Eraser {theme} />
        {/if}
      </Button>
    {:else if eraser_type === "pencil"}
      <Button
        class="eraser"
        active={appliance === "pencilEraser"}
        {...btn_props}
        on:click={select_pencil_eraser}
        content={c.pencilEraser}
        menu={eraser_panel}
      >
        {#if appliance === "pencilEraser"}
          <Icons.PencilEraserFilled {theme} active />
        {:else}
          <Icons.PencilEraser {theme} />
        {/if}
      </Button>
    {:else}
      <Button
        class="eraser"
        active={appliance === last_eraser}
        {...btn_props}
        on:click={select_last_eraser}
        content={t[last_eraser]}
        menu={eraser_panel}
      >
        {#if appliance === last_eraser}
          <svelte:component this={eraserIconActive[last_eraser]} {theme} active />
        {:else}
          <svelte:component this={eraserIcon[last_eraser]} {theme} />
        {/if}
      </Button>
    {/if}
    <Button class="clear" {...btn_props} on:click={clear} content={t.clear}>
      <Icons.Clear {theme} />
    </Button>
    {#if !hide_apps}
      <Button class="apps" {...btn_props} content={t.apps} menu={apps_panel} menu_placement="right-end">
        <Icons.Apps {theme} />
      </Button>
    {/if}
  {/if}
</div>
{#if scrollable}
  <Button class="scroll-down" {name} {theme} {disabled} on:click={scroll_down}>
    <Icons.Down {theme} />
  </Button>
{/if}

<div class="{name}-panel-wrapper" style="display:none">
  <div class="{name}-panel pencil" bind:this={pencil_panel}>
    <StrokeWidth {app} {theme} {disabled} />
    <div class="{name}-panel-divider" />
    <StrokeColor {app} {theme} {disabled} />
  </div>
  <div class="{name}-panel text" bind:this={text_panel}>
    <TextColor {app} {theme} {disabled} />
  </div>
  <div class="{name}-panel shapes" bind:this={shapes_panel}>
    <Shapes {app} {theme} {language} {disabled} />
    <div class="{name}-panel-divider" />
    <StrokeWidth {app} {theme} {disabled} />
    <div class="{name}-panel-divider" />
    <StrokeColor {app} {theme} {disabled} />
  </div>
  <div class="{name}-panel eraser" bind:this={eraser_panel}>
    {#if eraser_type === "both"}
      <div class="{name}-panel-btns">
        <Button
          class="eraser"
          active={appliance === "pencilEraser"}
          {...btn_props}
          on:click={select_pencil_eraser}
          placement="top"
          content={c.pencilEraserForPanel}
        >
          {#if appliance === "pencilEraser"}
            <Icons.PencilEraserFilled {theme} active />
          {:else}
            <Icons.PencilEraser {theme} />
          {/if}
        </Button>
        <Button
          class="eraser"
          active={appliance === "eraser"}
          {...btn_props}
          on:click={select_eraser}
          placement="top"
          content={c.eraserForPanel}
        >
          {#if appliance === "eraser"}
            <Icons.EraserFilled {theme} active />
          {:else}
            <Icons.Eraser {theme} />
          {/if}
        </Button>
      </div>
      {#if appliance === "pencilEraser"}
        <div class="{name}-panel-divider" />
        <PencilEraserSize {app} {theme} {disabled} />
      {/if}
    {:else if eraser_type === "pencil"}
      <PencilEraserSize {app} {theme} {disabled} />
    {/if}
  </div>
  <div class="{name}-panel apps" style="--n:{$stockedApps.length}" bind:this={apps_panel}>
    {#each $stockedApps as netless_app}
      {@const { icon, label, kind, onClick } = netless_app}
      {@const state = $status && $status[kind]}
      {@const on_click = () => {
        app && onClick(app);
        tippy_hide_all();
      }}
      <button
        class="{name}-app-btn {kind} {theme}"
        class:is-loading={state && state.status === "loading"}
        class:is-failed={state && state.status === "failed"}
        title={label + (state && state.reason ? ": " + state.reason : "")}
        data-app-kind={netless_app.kind}
        disabled={state && state.status !== "idle"}
        on:click={on_click}
      >
        <img class="{name}-app-btn-icon {theme}" src={icon} alt={kind} title={label} />
        <span class="{name}-app-btn-text {theme}">{label}</span>
      </button>
    {/each}
  </div>
</div>
