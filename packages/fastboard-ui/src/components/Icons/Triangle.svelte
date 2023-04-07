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
  <g id="&#228;&#184;&#137;&#232;&#167;&#146;&#229;&#189;&#162;" clip-path="url(#clip0_1193_9064)">
    <path
      id="Polygon 11"
      d="M10 3.19995L17.7942 16.7H2.20577L10 3.19995Z"
      stroke="#222222"
      stroke-width="1.5"
    />
  </g>
  <defs>
    <clipPath id="clip0_1193_9064">
      <rect width="20" height="20" fill="white" />
    </clipPath>
  </defs>
</svg>
