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
    <g id="&#229;&#133;&#177;&#228;&#186;&#171;">
      <g id="Group">
        <path
          id="Vector"
          d="M18 7.22733V10.4993C18 13.3062 17.288 14 14.448 14H5.552C2.712 14 2 13.2983 2 10.4993V5.50066C2 2.70171 2.712 2 5.552 2H12.84"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Line"
          d="M10 14V18"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Line_2"
          d="M2 11H18"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Line_3"
          d="M6 18H14"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Vector_2"
          d="M14.0782 6.07924L17.0417 3.00009"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Vector_3"
          d="M18 4.5V2H15.5"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </g>
  </svg>
</div>
