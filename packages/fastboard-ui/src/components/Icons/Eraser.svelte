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
  <g id="&#230;&#169;&#161;&#231;&#154;&#174;">
    <path
      id="Rectangle 48"
      d="M8.81708 3.66168C10.3792 2.09958 12.9118 2.09958 14.4739 3.66168L16.3385 5.52621C17.9006 7.08831 17.9006 9.62097 16.3385 11.1831L12.3526 15.1689C11.9621 15.5594 11.3289 15.5594 10.9384 15.1689L4.83123 9.06175C4.4407 8.67122 4.4407 8.03806 4.83123 7.64753L8.81708 3.66168Z"
      stroke="#222222"
      stroke-width="1.5"
    />
    <path
      id="Rectangle 49"
      d="M4.59375 8.82471L11.175 15.4059L10.2427 16.3382C8.6806 17.9003 6.14794 17.9003 4.58584 16.3382L3.66148 15.4138C2.09938 13.8517 2.09939 11.3191 3.66148 9.75697L4.59375 8.82471Z"
      stroke="#222222"
      stroke-width="1.5"
    />
  </g>
</svg>
