<script>
  export let size;
  export let variant = 'normal';
</script>

<div class={size}>
  {#if variant === 'gradient'}
    <svg
      id="SvgjsSvg1001"
      width="32"
      height="32"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xmlns:svgjs="http://svgjs.com/svgjs"
    >
      <defs id="SvgjsDefs1002" />
      <g id="SvgjsG1008">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          data-name="Layer 1"
          viewBox="0 0 512 512"
          width="32"
          height="32"
        >
          <defs>
            <linearGradient
              id="a"
              x1="256"
              x2="256"
              y1="18.711"
              y2="498.768"
              gradientUnits="userSpaceOnUse"
            >
              <stop
                offset="0"
                stop-color="#30e3ca"
                class="stopColor00efd1 svgShape"
              />
              <stop
                offset="1"
                stop-color="#2f89fc"
                class="stopColor00acea svgShape"
              />
            </linearGradient>
          </defs>
          <g
            data-name="&amp;lt;Group&amp;gt;"
            fill="#40514e"
            class="color000 svgShape"
          >
            <path
              fill="url(#a)"
              d="M485.8,258.041,378,229.637V98.558a7.958,7.958,0,0,0-5.912-7.735L258.02,60.692a7.969,7.969,0,0,0-4.074,0L139.906,90.823A7.954,7.954,0,0,0,134,98.558V229.637l-107.8,28.4a8.223,8.223,0,0,0-6.2,7.734v125.1a8.186,8.186,0,0,0,4.844,7.262l114.19,52.7a8.214,8.214,0,0,0,3.4.738,8.105,8.105,0,0,0,3.38-.738l110.17-50.885,110.163,50.885a8,8,0,0,0,6.714,0l114.291-52.7A8.188,8.188,0,0,0,492,390.871v-125.1A8.223,8.223,0,0,0,485.8,258.041ZM141.1,244.286l82.461,21.777-81.075,21L60.013,265.7ZM248,134.849V255.967l-98-25.9V108.945Zm16,0,98-25.9V230.063l-98,25.9ZM150,301.519l98-25.257V386.021l-98,45.044Zm114-25.257,98,25.257V431.065l-98-45.044Zm105.512,10.8-81.075-21L370.9,244.286,451.987,265.7ZM256,76.7l82.76,21.856L256,120.413,173.24,98.558ZM36,276.112l98,25.407V431.065L36,385.754ZM378,431.065V301.519l98-25.407V385.754Z"
              data-name="&amp;lt;Compound Path&amp;gt;"
            />
          </g>
        </svg>
      </g>
    </svg>
  {:else if variant === 'solid'}
    <svg
      id="SvgjsSvg1001"
      width="32"
      height="32"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xmlns:svgjs="http://svgjs.com/svgjs"
    >
      <defs id="SvgjsDefs1002"></defs>
      <g id="SvgjsG1008">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          data-name="Layer 1"
          viewBox="0 0 512 512"
          width="32"
          height="32"
        >
          <defs>
            <linearGradient
              id="a"
              x1="256"
              x2="256"
              y1="18.711"
              y2="498.768"
              gradientUnits="userSpaceOnUse"
            >
              <stop
                offset="0"
                stop-color="#2f89fc"
                class="stopColor00efd1 svgShape"
              ></stop>
              <stop
                offset="1"
                stop-color="#2f89fc"
                class="stopColor00acea svgShape"
              ></stop>
            </linearGradient>
          </defs>
          <g
            data-name="&amp;lt;Group&amp;gt;"
            fill="#2f89fc"
            class="color000 svgShape"
          >
            <path
              fill="url(#a)"
              d="M485.8,258.041,378,229.637V98.558a7.958,7.958,0,0,0-5.912-7.735L258.02,60.692a7.969,7.969,0,0,0-4.074,0L139.906,90.823A7.954,7.954,0,0,0,134,98.558V229.637l-107.8,28.4a8.223,8.223,0,0,0-6.2,7.734v125.1a8.186,8.186,0,0,0,4.844,7.262l114.19,52.7a8.214,8.214,0,0,0,3.4.738,8.105,8.105,0,0,0,3.38-.738l110.17-50.885,110.163,50.885a8,8,0,0,0,6.714,0l114.291-52.7A8.188,8.188,0,0,0,492,390.871v-125.1A8.223,8.223,0,0,0,485.8,258.041ZM141.1,244.286l82.461,21.777-81.075,21L60.013,265.7ZM248,134.849V255.967l-98-25.9V108.945Zm16,0,98-25.9V230.063l-98,25.9ZM150,301.519l98-25.257V386.021l-98,45.044Zm114-25.257,98,25.257V431.065l-98-45.044Zm105.512,10.8-81.075-21L370.9,244.286,451.987,265.7ZM256,76.7l82.76,21.856L256,120.413,173.24,98.558ZM36,276.112l98,25.407V431.065L36,385.754ZM378,431.065V301.519l98-25.407V385.754Z"
              data-name="&amp;lt;Compound Path&amp;gt;"
            ></path>
          </g>
        </svg>
      </g>
    </svg>
  {:else}
    <svg
      id="SvgjsSvg1001"
      width="32"
      height="32"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xmlns:svgjs="http://svgjs.com/svgjs"
    >
      <defs id="SvgjsDefs1002"></defs>
      <g id="SvgjsG1008">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          data-name="Layer 1"
          viewBox="0 0 512 512"
          width="32"
          height="32"
        >
          <defs>
            <linearGradient
              id="a"
              x1="256"
              x2="256"
              y1="18.711"
              y2="498.768"
              gradientUnits="userSpaceOnUse"
            >
              <stop
                offset="0"
                stop-color="#d2d2d2"
                class="stopColor00efd1 svgShape"
              ></stop>
              <stop
                offset="1"
                stop-color="#d2d2d2"
                class="stopColor00acea svgShape"
              ></stop>
            </linearGradient>
          </defs>
          <g
            data-name="&amp;lt;Group&amp;gt;"
            fill="#d2d2d2"
            class="color000 svgShape"
          >
            <path
              fill="url(#a)"
              d="M485.8,258.041,378,229.637V98.558a7.958,7.958,0,0,0-5.912-7.735L258.02,60.692a7.969,7.969,0,0,0-4.074,0L139.906,90.823A7.954,7.954,0,0,0,134,98.558V229.637l-107.8,28.4a8.223,8.223,0,0,0-6.2,7.734v125.1a8.186,8.186,0,0,0,4.844,7.262l114.19,52.7a8.214,8.214,0,0,0,3.4.738,8.105,8.105,0,0,0,3.38-.738l110.17-50.885,110.163,50.885a8,8,0,0,0,6.714,0l114.291-52.7A8.188,8.188,0,0,0,492,390.871v-125.1A8.223,8.223,0,0,0,485.8,258.041ZM141.1,244.286l82.461,21.777-81.075,21L60.013,265.7ZM248,134.849V255.967l-98-25.9V108.945Zm16,0,98-25.9V230.063l-98,25.9ZM150,301.519l98-25.257V386.021l-98,45.044Zm114-25.257,98,25.257V431.065l-98-45.044Zm105.512,10.8-81.075-21L370.9,244.286,451.987,265.7ZM256,76.7l82.76,21.856L256,120.413,173.24,98.558ZM36,276.112l98,25.407V431.065L36,385.754ZM378,431.065V301.519l98-25.407V385.754Z"
              data-name="&amp;lt;Compound Path&amp;gt;"
            ></path>
          </g>
        </svg>
      </g>
    </svg>
  {/if}
</div>
