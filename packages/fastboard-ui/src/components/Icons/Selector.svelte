<script lang="ts">
  import type { Theme } from "../../typings";

  export let theme: Theme = "light";
  export let active = false;
</script>

<div class="icon-wrap">
  <svg
    width="20"
    height="20"
    class="fastboard-icon {theme}"
    class:is-active={active}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="&#233;&#128;&#137;&#228;&#184;&#173;">
      <path
        id="Vector"
        d="M5.35455 14.5116L2.83253 6.94554C1.70116 3.55142 3.55142 1.70116 6.94554 2.83253L14.5116 5.35454C19.6027 7.0516 19.5969 9.827 14.5116 11.5182L12.9795 12.0249C12.5906 12.1546 12.1604 12.5847 12.0308 12.9736L11.5182 14.5116C9.827 19.5969 7.04571 19.5969 5.35455 14.5116Z"
        stroke="#222222"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
  </svg>
</div>
