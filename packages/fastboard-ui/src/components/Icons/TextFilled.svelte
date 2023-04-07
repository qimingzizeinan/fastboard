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
    <g
      id="&#230;&#150;&#135;&#229;&#173;&#151;&#239;&#188;&#136;&#233;&#128;&#137;&#228;&#184;&#173;&#239;&#188;&#137;"
    >
      <path id="Rectangle 46" d="M20 16.6667V20.0001H16.6666L20 16.6667Z" fill="white" />
      <g id="Group 52">
        <path
          id="Line"
          d="M6.9917 17.2H13.5584"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Line_2"
          d="M10.2749 17.2001V3.3584"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Vector"
          d="M2.5 5.90841V4.39175C2.5 3.43341 3.275 2.66675 4.225 2.66675H16.325C17.2833 2.66675 18.05 3.44175 18.05 4.39175V5.90841"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </g>
  </svg>
</div>
