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
  <g id="&#229;&#156;&#134;&#229;&#189;&#162;">
    <rect
      id="Rectangle 13102"
      x="2.5"
      y="2.5"
      width="15"
      height="15"
      rx="7.5"
      stroke="#1890FF"
      stroke-width="1.5"
    />
  </g>
</svg>
