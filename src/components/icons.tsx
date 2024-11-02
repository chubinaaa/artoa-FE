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
  chevronDown: (props: SvgIconProps) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19 8.5L12 15.5L5 8.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  chevronUp: (props: SvgIconProps) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5 15.5L12 8.5L19 15.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  chevronRight: (props: SvgIconProps) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.5 5L15.5 12L8.5 19"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  chevronLeft: (props: SvgIconProps) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15.5 19L8.5 12L15.5 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  radioChecked: (props: SvgIconProps) => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x="1"
        y="1"
        width="18"
        height="18"
        rx="9"
        strokeWidth="2"
        className="stroke-primary"
      />
      <circle cx="10" cy="10" r="5" className="fill-primary" />
    </svg>
  ),
  radioUnchecked: (props: SvgIconProps) => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x="1"
        y="1"
        width="18"
        height="18"
        rx="9"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  ),
  //...rest of the icons
};
