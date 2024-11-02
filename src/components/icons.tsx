import { cn } from "@/lib/utils";

type SvgIconProps = React.SVGProps<SVGSVGElement>;

export const Icons = {
  // TODO: replace me with the actual ArtOa svg logo
  logo: (props: SvgIconProps) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 12.0058C2 6.48625 6.48842 2 12 2C17.5116 2 22 6.48625 22 12.0058C22 17.5137 17.5116 22 12 22C6.48842 22 2 17.5137 2 12.0058ZM15.668 13.0178C15.7741 12.9117 15.9093 12.7477 15.9382 12.7091C16.0927 12.5065 16.1699 12.2557 16.1699 12.0058C16.1699 11.725 16.083 11.4645 15.9189 11.2523C15.9055 11.2388 15.8791 11.2102 15.8448 11.1728C15.7806 11.103 15.6885 11.0026 15.6004 10.9146C14.8089 10.0656 12.7432 8.67631 11.6622 8.25181C11.4981 8.18524 11.083 8.03956 10.861 8.02991C10.6486 8.02991 10.4459 8.07815 10.2529 8.17463C10.0116 8.3097 9.81853 8.52195 9.71236 8.77279C9.64479 8.94645 9.53861 9.46744 9.53861 9.47709C9.43243 10.0463 9.37452 10.9725 9.37452 11.9952C9.37452 12.9706 9.43243 13.8572 9.51931 14.4361C9.52169 14.4385 9.53 14.4799 9.5429 14.5442C9.58211 14.7397 9.6638 15.1471 9.75097 15.314C9.96332 15.7192 10.3784 15.9701 10.8224 15.9701H10.861C11.1506 15.9604 11.7587 15.7096 11.7587 15.7C12.7819 15.2754 14.7992 13.9537 15.61 13.0757L15.668 13.0178Z"
        fill="currentColor"
      />
    </svg>
  ),
  closeSquare: (props: SvgIconProps) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="Variant=Light, Icon=Close Square">
        <g id="Close Square">
          <path
            id="Stroke 1"
            d="M14.3955 9.59497L9.60352 14.387"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Stroke 2"
            d="M14.397 14.3899L9.60095 9.5929"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Stroke 3"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.3345 2.75024H7.66549C4.64449 2.75024 2.75049 4.88924 2.75049 7.91624V16.0842C2.75049 19.1112 4.63549 21.2502 7.66549 21.2502H16.3335C19.3645 21.2502 21.2505 19.1112 21.2505 16.0842V7.91624C21.2505 4.88924 19.3645 2.75024 16.3345 2.75024Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
    </svg>
  ),
  acrilicArtBrush: (props: SvgIconProps) => (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M60.7453 1.86172C57.9531 4.06597 40.0475 25.6876 33.2864 31.7458C29.8989 34.7761 31.5669 37.2975 31.5669 37.2975C32.5765 37.3988 33.5874 38.9146 33.5874 38.9146C35.5565 39.1407 38.6349 35.8848 43.9879 27.505C51.1783 16.2431 61.755 2.46672 61.755 2.46672C62.4625 1.05397 60.7453 1.86172 60.7453 1.86172Z"
        fill="currentColor"
      />
      <path
        d="M26.8963 39.1852C23.581 44.9892 18.8799 43.1347 18.8799 43.4964C18.8799 45.2089 24.8013 47.0017 28.1498 46.1775C32.255 45.1678 33.3438 41.7848 33.3438 40.0723C33.3438 38.3586 29.1538 35.238 26.8963 39.1852Z"
        fill="currentColor"
      />
      <path
        d="M38.7011 46.6813C36.2077 46.1535 34.2066 45.3809 32.6129 44.4249C31.7052 45.5548 30.3463 46.5508 28.3602 47.0384C27.7339 47.1942 27.0173 47.2719 26.2274 47.2719C22.8709 47.2719 17.9931 45.8009 17.9931 43.4965C17.9931 43.0889 18.2592 42.7329 18.6542 42.6093C18.7682 42.5749 18.8878 42.5565 19.0343 42.5565C19.1539 42.5565 19.2822 42.568 19.4482 42.5805C19.6738 42.5994 19.9542 42.6199 20.2833 42.6199C22.6926 42.6199 24.6571 41.3167 26.1269 38.746C26.4911 38.1102 26.8917 37.6407 27.3038 37.2933C24.9616 27.8339 32.6501 15.2012 26.1396 15.2012C12.7948 15.2012 1.97656 25.7888 1.97656 38.848C1.97656 51.9072 12.7948 62.493 26.1396 62.493C39.4853 62.4932 46.3207 48.292 38.7011 46.6813ZM20.0054 19.4383C21.5022 19.4383 22.7152 20.6518 22.7152 22.1474C22.7152 23.6437 21.5022 24.8554 20.0054 24.8554C18.5108 24.8554 17.2992 23.6437 17.2992 22.1474C17.2992 20.6517 18.5109 19.4383 20.0054 19.4383ZM13.0612 25.3018C15.0732 25.3018 16.7033 26.9338 16.7033 28.945C16.7033 30.9582 15.0732 32.5889 13.0612 32.5889C11.0481 32.5889 9.41619 30.9582 9.41619 28.945C9.41619 26.9338 11.0481 25.3018 13.0612 25.3018ZM4.73856 40.3255C4.73856 37.7412 6.83181 35.6473 9.41619 35.6473C11.9999 35.6473 14.0943 37.7412 14.0943 40.3255C14.0943 42.9088 11.9999 45.0032 9.41619 45.0032C6.83181 45.003 4.73856 42.9088 4.73856 40.3255ZM17.7382 58.8963C14.5832 58.8963 12.0246 56.3388 12.0246 53.1827C12.0246 50.0288 14.5832 47.4702 17.7382 47.4702C20.8949 47.4702 23.4524 50.0288 23.4524 53.1827C23.4524 56.3388 20.8949 58.8963 17.7382 58.8963Z"
        fill="currentColor"
      />
    </svg>
  ),
  customer: ({ className, ...props }: SvgIconProps) => (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      // TODO: replace this icon with one without extra padding around the actual svg
      className={cn("-mb-2.5", className)}
      {...props}
    >
      <path
        d="M32.5603 33.3027C31.9132 33.3123 31.2699 33.3139 30.6253 33.2472C23.4706 32.5068 18.1879 25.8293 18.8897 18.741C19.5404 12.1685 25.0476 6.87178 31.674 6.77283L31.7261 6.7614C35.2064 6.58603 38.6198 8.03425 41.1714 10.3486C46.5321 15.2108 46.6161 23.8012 41.8151 29.0689C39.4415 31.6732 36.0595 33.1397 32.5603 33.3027Z"
        fill="currentColor"
      />
      <path
        d="M36.992 53.3631L12.1437 53.3609C11.0127 53.3598 10.0065 53.4116 9.99833 51.9888C9.94352 42.4358 17.7914 34.8543 27.2168 34.8247L34.0049 34.8245C35.4609 34.8248 36.9518 34.7601 38.4033 34.8686C46.38 35.4647 52.6651 41.5917 53.9642 49.3631C54.1045 50.2023 54.7011 53.2285 53.24 53.3338L53.1897 53.3363C52.5225 53.3919 51.8369 53.3635 51.1668 53.3635L36.992 53.3631Z"
        fill="currentColor"
      />
    </svg>
  ),
  globe: () => (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_885_15828)">
        <path
          d="M8.00031 16.18C12.2419 16.18 15.6803 12.7416 15.6803 8.50001C15.6803 4.25846 12.2419 0.820007 8.00031 0.820007C3.75877 0.820007 0.320312 4.25846 0.320312 8.50001C0.320312 12.7416 3.75877 16.18 8.00031 16.18Z"
          stroke="#C7C3C3"
          stroke-miterlimit="10"
          stroke-linecap="round"
        />
        <path
          d="M8.00016 16.18C10.1209 16.18 11.8402 12.7416 11.8402 8.50001C11.8402 4.25846 10.1209 0.820007 8.00016 0.820007C5.87938 0.820007 4.16016 4.25846 4.16016 8.50001C4.16016 12.7416 5.87938 16.18 8.00016 16.18Z"
          stroke="#C7C3C3"
          stroke-miterlimit="10"
          stroke-linecap="round"
        />
        <path
          d="M2.03711 13.4402C3.44543 12.5733 5.59359 12.02 8.00031 12.02C10.3741 12.02 12.496 12.5583 13.9046 13.404"
          stroke="#C7C3C3"
          stroke-miterlimit="10"
        />
        <path
          d="M13.9632 3.56018C12.5549 4.42674 10.4067 4.98002 8.00002 4.98002C5.62658 4.98002 3.50434 4.44178 2.0957 3.59602"
          stroke="#C7C3C3"
          stroke-miterlimit="10"
        />
        <path
          d="M0.320312 8.5H15.6803"
          stroke="#C7C3C3"
          stroke-miterlimit="10"
        />
        <path d="M8 0.820007V16.18" stroke="#C7C3C3" stroke-miterlimit="10" />
      </g>
      <defs>
        <clipPath id="clip0_885_15828">
          <rect
            width="16"
            height="16"
            fill="white"
            transform="translate(0 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  ),
  arrowDown: () => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.66699 3.33317L10.3337 7.99984L5.66699 12.6665"
        stroke="#AFAFAF"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  arrowRigth: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.4"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 21.2498C17.108 21.2498 21.25 17.1088 21.25 11.9998C21.25 6.89176 17.108 2.74976 12 2.74976C6.892 2.74976 2.75 6.89176 2.75 11.9998C2.75 17.1088 6.892 21.2498 12 21.2498Z"
        stroke="#130F26"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.5577 15.4709L14.0437 11.9999L10.5577 8.52895"
        stroke="#130F26"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  facebook: () => (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.9677 10.7366H16.1919V8.26028C16.1919 7.33029 16.8083 7.11347 17.2424 7.11347C17.6755 7.11347 19.9069 7.11347 19.9069 7.11347V3.02506L16.2373 3.01074C12.1637 3.01074 11.2367 6.06001 11.2367 8.01136V10.7366H8.88086V14.9495H11.2367C11.2367 20.3561 11.2367 26.8705 11.2367 26.8705H16.1919C16.1919 26.8705 16.1919 20.2919 16.1919 14.9495H19.5355L19.9677 10.7366Z"
        fill="white"
      />
    </svg>
  ),
  instagram: () => (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.4415 2.38574H6.42042C3.81121 2.38574 1.68848 4.50798 1.68848 7.11719V12.1153V22.1388C1.68848 24.748 3.81121 26.8702 6.42042 26.8702H21.442C24.0512 26.8702 26.1735 24.748 26.1735 22.1388V12.1148V7.1167C26.173 4.50749 24.0507 2.38574 21.4415 2.38574ZM22.7987 5.20733L23.34 5.20535V5.74418V9.35549L19.2037 9.36883L19.1894 5.21918L22.7987 5.20733ZM10.4362 12.1148C11.2205 11.0298 12.4928 10.3181 13.931 10.3181C15.3692 10.3181 16.6414 11.0298 17.4247 12.1148C17.9349 12.8231 18.2406 13.6894 18.2406 14.6277C18.2406 17.0038 16.3056 18.9369 13.9305 18.9369C11.5539 18.9369 9.62081 17.0038 9.62081 14.6277C9.62131 13.6894 9.92604 12.8231 10.4362 12.1148ZM23.7875 22.1383C23.7875 23.4328 22.735 24.4843 21.4415 24.4843H6.42042C5.12643 24.4843 4.07396 23.4328 4.07396 22.1383V12.1148H7.72873C7.41313 12.8912 7.23583 13.7392 7.23583 14.6277C7.23583 18.3186 10.2387 21.3234 13.931 21.3234C17.6228 21.3234 20.6256 18.3186 20.6256 14.6277C20.6256 13.7392 20.4473 12.8912 20.1317 12.1148H23.7875V22.1383Z"
        fill="white"
      />
    </svg>
  ),
  youtube: () => (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.6867 13.9326H6.31244C3.86868 13.9326 1.8877 15.9156 1.8877 18.3588V21.9153C1.8877 24.3586 3.86868 26.3411 6.31244 26.3411H21.6867C24.1299 26.3411 26.1114 24.3586 26.1114 21.9153V18.3588C26.1114 15.9156 24.1299 13.9326 21.6867 13.9326ZM9.54247 16.7014H8.11315V23.8035H6.73224V16.7014H5.30392V15.4933H9.54247V16.7014ZM13.58 23.8035H12.3552V23.1318C12.1275 23.3802 11.8929 23.5699 11.6479 23.6978C11.4029 23.8311 11.1664 23.8934 10.9362 23.8934C10.6517 23.8934 10.4404 23.803 10.2956 23.6192C10.1534 23.436 10.0808 23.1644 10.0808 22.7974V17.6723H11.3056V22.3756C11.3056 22.5208 11.3328 22.6251 11.3817 22.6898C11.4346 22.7564 11.5185 22.787 11.6336 22.787C11.7225 22.787 11.8371 22.7446 11.9749 22.6586C12.1136 22.5717 12.2401 22.4631 12.3552 22.3287V17.6718H13.58V23.8035ZM18.027 22.5376C18.027 22.9708 17.9307 23.3037 17.7385 23.5358C17.5474 23.7679 17.2679 23.882 16.9058 23.882C16.6648 23.882 16.4505 23.8385 16.2643 23.7486C16.0771 23.6597 15.9008 23.5229 15.7403 23.3333V23.803H14.5006V15.4933H15.7403V18.1697C15.9062 17.9845 16.0815 17.8408 16.2648 17.7444C16.452 17.6462 16.6401 17.5987 16.8308 17.5987C17.2185 17.5987 17.5138 17.7281 17.7183 17.9894C17.9237 18.2507 18.026 18.6334 18.026 19.1352V22.5376H18.027ZM22.2759 20.8856H19.9319V22.0408C19.9319 22.3628 19.9714 22.587 20.0514 22.712C20.1334 22.8374 20.2712 22.8987 20.4673 22.8987C20.6708 22.8987 20.8115 22.8458 20.8935 22.7401C20.9725 22.6334 21.015 22.4013 21.015 22.0408V21.7617H22.2759V22.0763C22.2759 22.7046 22.1233 23.1782 21.8136 23.4978C21.5089 23.8143 21.0496 23.9714 20.4391 23.9714C19.8894 23.9714 19.4563 23.804 19.1417 23.4671C18.8281 23.1323 18.668 22.6675 18.668 22.0768V19.3229C18.668 18.793 18.8429 18.3569 19.1901 18.0225C19.5363 17.6881 19.9823 17.5212 20.531 17.5212C21.0925 17.5212 21.5237 17.6758 21.8245 17.986C22.1253 18.2966 22.2759 18.7411 22.2759 19.3224V20.8856Z"
        fill="white"
      />
      <path
        d="M20.4789 18.5933C20.2833 18.5933 20.144 18.6481 20.0591 18.7627C19.9721 18.8703 19.9316 19.0546 19.9316 19.3119V19.9317H21.0147V19.3119C21.0147 19.0546 20.9713 18.8698 20.8853 18.7627C20.8029 18.6486 20.6651 18.5933 20.4789 18.5933Z"
        fill="white"
      />
      <path
        d="M16.2534 18.5723C16.1664 18.5723 16.0785 18.5915 15.9941 18.6315C15.9081 18.6705 15.8242 18.7352 15.7412 18.8192V22.6384C15.8395 22.7372 15.9368 22.8133 16.0316 22.8567C16.1259 22.8987 16.2237 22.9224 16.328 22.9224C16.4786 22.9224 16.5882 22.879 16.6589 22.7911C16.7285 22.7041 16.7641 22.5654 16.7641 22.3693V19.203C16.7641 18.9945 16.7226 18.8385 16.6356 18.7313C16.5458 18.6256 16.4183 18.5723 16.2534 18.5723Z"
        fill="white"
      />
      <path
        d="M8.3252 11.8032H9.87798V8.00516L11.6861 2.64746H10.1076L9.14653 6.30717H9.04874L8.03973 2.64746H6.47559L8.3252 8.17605V11.8032Z"
        fill="white"
      />
      <path
        d="M13.7902 11.9736C14.4174 11.9736 14.9093 11.8091 15.2679 11.4802C15.624 11.1498 15.8023 10.6989 15.8023 10.121V6.63221C15.8023 6.11807 15.6201 5.69481 15.257 5.36835C14.8916 5.04288 14.4234 4.87891 13.8524 4.87891C13.2252 4.87891 12.7259 5.03399 12.3545 5.34365C11.984 5.65332 11.7979 6.06868 11.7979 6.59369V10.0944C11.7979 10.6688 11.9791 11.1231 12.3411 11.4639C12.7031 11.8032 13.1872 11.9736 13.7902 11.9736ZM13.2183 6.54232C13.2183 6.39564 13.2711 6.2771 13.3743 6.18425C13.4815 6.09338 13.6173 6.04942 13.7862 6.04942C13.9685 6.04942 14.1162 6.09338 14.2288 6.18425C14.3409 6.2771 14.3967 6.39564 14.3967 6.54232V10.2223C14.3967 10.4026 14.3419 10.5458 14.2307 10.649C14.1206 10.7527 13.9724 10.8036 13.7862 10.8036C13.604 10.8036 13.4632 10.7542 13.3645 10.6505C13.2672 10.5492 13.2178 10.407 13.2178 10.2218L13.2183 6.54232Z"
        fill="white"
      />
      <path
        d="M17.8854 11.902C18.1447 11.902 18.4109 11.8279 18.685 11.6857C18.9621 11.5415 19.2273 11.3306 19.4797 11.0555V11.8037H20.8591V5.0498H19.4797V10.1764C19.3513 10.323 19.2086 10.4436 19.0555 10.5394C18.8994 10.6342 18.771 10.6816 18.6697 10.6816C18.5403 10.6816 18.445 10.6461 18.3892 10.5725C18.3324 10.5018 18.3003 10.3863 18.3003 10.2277V5.0498H16.9229V10.6945C16.9229 11.097 17.0038 11.3977 17.1639 11.5973C17.3269 11.7998 17.5649 11.902 17.8854 11.902Z"
        fill="white"
      />
    </svg>
  ),
  pinterest: () => (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.0018 2.28271C8.29183 2.28271 4.9082 7.09318 4.9082 11.1055C4.9082 13.5345 5.82782 15.6952 7.79992 16.4998C8.12341 16.6331 8.41333 16.5047 8.50717 16.1466C8.57236 15.8997 8.72695 15.2744 8.7956 15.0132C8.88993 14.6591 8.85338 14.5356 8.59211 14.2259C8.02365 13.5557 7.65965 12.6875 7.65965 11.4567C7.65965 7.88785 10.3301 4.69289 14.6131 4.69289C18.4057 4.69289 20.4894 7.01021 20.4894 10.1044C20.4894 14.177 18.6872 17.614 16.0123 17.614C14.5346 17.614 13.4293 16.3926 13.7829 14.8937C14.2071 13.1043 15.0295 11.1742 15.0295 9.88168C15.0295 8.72598 14.4086 7.76191 13.125 7.76191C11.6147 7.76191 10.4012 9.32457 10.4012 11.4172C10.4012 12.7502 10.8517 13.652 10.8517 13.652C10.8517 13.652 9.30628 20.201 9.03513 21.3478C8.49581 23.632 8.95413 26.4314 8.99315 26.7139C9.01587 26.8818 9.23121 26.9223 9.329 26.7959C9.46778 26.6136 11.2675 24.3931 11.8784 22.1736C12.0518 21.5458 12.8717 18.2921 12.8717 18.2921C13.3626 19.2285 14.7968 20.0513 16.322 20.0513C20.8613 20.0513 23.9417 15.913 23.9417 10.3736C23.9422 6.18394 20.3941 2.28271 15.0018 2.28271Z"
        fill="white"
      />
    </svg>
  ),

  //...rest of the icons
};
