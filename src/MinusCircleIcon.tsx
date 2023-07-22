const MinusCircleIcon = () => {
  return (
    <svg
      width="35"
      height="35"
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_896_79609)">
        <rect x="3" y="1" width="29" height="29" rx="14.5" fill="white" />
        <path
          d="M17.5003 27.5832C24.1738 27.5832 29.5837 22.1733 29.5837 15.4998C29.5837 8.8264 24.1738 3.4165 17.5003 3.4165C10.8269 3.4165 5.41699 8.8264 5.41699 15.4998C5.41699 22.1733 10.8269 27.5832 17.5003 27.5832Z"
          fill="white"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.667 15.5H22.3337"
          stroke="#475766"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_896_79609"
          x="0"
          y="0"
          width="35"
          height="35"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="1"
            operator="erode"
            in="SourceAlpha"
            result="effect1_dropShadow_896_79609"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_896_79609"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_896_79609"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default MinusCircleIcon;
