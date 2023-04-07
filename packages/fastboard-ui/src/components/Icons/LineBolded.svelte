<script lang="ts">
  import type { Theme } from "../../typings";

  export let theme: Theme = "light";
  export let active = false;
</script>

<svg
  width="20"
  height="20"
  class="fastboard-icon {theme}"
  class:is-active={active}
  viewBox="0 0 20 20"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <g id="&#231;&#186;&#191;&#230;&#157;&#161;">
    <path id="Line 30" d="M16 3.11133L5 17.1113" stroke="#1890FF" stroke-width="1.5" />
  </g>
</svg>
