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
  <g id="&#228;&#186;&#148;&#232;&#167;&#146;&#230;&#152;&#159;" clip-path="url(#clip0_1193_9060)">
    <path
      id="Star 2"
      d="M10 3L11.7961 8.52786H17.6085L12.9062 11.9443L14.7023 17.4721L10 14.0557L5.29772 17.4721L7.09383 11.9443L2.39155 8.52786H8.20389L10 3Z"
      stroke="#222222"
      stroke-width="1.5"
    />
  </g>
  <defs>
    <clipPath id="clip0_1193_9060">
      <rect width="20" height="20" fill="white" />
    </clipPath>
  </defs>
</svg>
