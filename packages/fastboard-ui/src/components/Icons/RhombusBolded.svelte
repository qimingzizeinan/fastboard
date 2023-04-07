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
  <g id="&#232;&#143;&#177;&#229;&#189;&#162;" clip-path="url(#clip0_1193_9081)">
    <rect
      id="Rectangle 13104"
      x="10"
      y="2"
      width="11.7426"
      height="11.7426"
      transform="rotate(45 10 2)"
      stroke="#1890FF"
      stroke-width="1.5"
    />
  </g>
  <defs>
    <clipPath id="clip0_1193_9081">
      <rect width="20" height="20" fill="white" />
    </clipPath>
  </defs>
</svg>
