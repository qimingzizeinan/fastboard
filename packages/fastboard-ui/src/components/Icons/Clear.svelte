<script lang="ts">
  import type { Theme } from "../../typings";

  export let theme: Theme = "light";
  export let active = false;
</script>

<!-- <div>
  <div class="icon-wrap">
    <img src={NormalClearIcon} alt="" />
  </div>
  <div>清除</div>
</div> -->

<svg
  width="20"
  height="20"
  class="fastboard-icon {theme}"
  class:is-active={active}
  viewBox="0 0 20 20"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <g id="&#230;&#184;&#133;&#233;&#153;&#164;">
    <path
      id="Rectangle 50"
      d="M11.25 7.50008V2.91675C11.25 2.22639 10.6904 1.66675 10 1.66675V1.66675C9.30964 1.66675 8.75 2.22639 8.75 2.91675V7.50008"
      stroke="#222222"
      stroke-width="1.5"
    />
    <rect
      id="Rectangle 51"
      x="1.66663"
      y="10"
      width="2.5"
      height="16.6667"
      rx="1.25"
      transform="rotate(-90 1.66663 10)"
      stroke="#222222"
      stroke-width="1.5"
    />
    <path
      id="Rectangle 52"
      d="M3.80581 18.3333C3.14749 18.3333 2.66878 17.7081 2.84038 17.0726L4.55038 10.7393C4.66817 10.303 5.06391 9.99992 5.51581 9.99992L10 9.99992L14.4842 9.99992C14.9361 9.99992 15.3318 10.303 15.4496 10.7393L17.1596 17.0726C17.3312 17.7081 16.8525 18.3333 16.1942 18.3333L3.80581 18.3333Z"
      stroke="#222222"
      stroke-width="1.5"
    />
  </g>
</svg>

<!--
<svg fill="none" viewBox="0 0 24 24" class="fastboard-icon {theme}" class:is-active={active}>
  <path
    d="M19.6567 4.34323L13.9999 10.0001"
    stroke="#5D6066"
    stroke-width="1.25"
    stroke-linejoin="round"
    class="fastboard-icon-stroke-color"
  />
  <path
    d="M8.34296 10.0001C9.90506 8.43799 12.4377 8.43799 13.9998 10.0001V10.0001C15.5619 11.5622 15.5619 14.0948 13.9998 15.6569V15.6569L8.34296 10.0001V10.0001Z"
    stroke="#5D6066"
    stroke-width="1.25"
    stroke-linejoin="round"
    class="fastboard-icon-stroke-color"
  />
  <path
    d="M8.34292 10.0001L13.9998 15.6569L11.5856 19.8996L4.10028 11.4143L8.34292 10.0001Z"
    stroke="#5D6066"
    stroke-width="1.25"
    stroke-linejoin="round"
    class="fastboard-icon-stroke-color"
  />
</svg> -->
