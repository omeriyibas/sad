const PlusCircleIcon = () => {
  return (
    <svg
      width="34"
      height="35"
      viewBox="0 0 34 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_896_79605)">
        <rect x="3" y="1" width="28" height="29" rx="14" fill="white" />
        <path
          d="M16.9997 27.5832C23.443 27.5832 28.6663 22.1733 28.6663 15.4998C28.6663 8.8264 23.443 3.4165 16.9997 3.4165C10.5564 3.4165 5.33301 8.8264 5.33301 15.4998C5.33301 22.1733 10.5564 27.5832 16.9997 27.5832Z"
          fill="white"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17 10.6665V20.3332"
          stroke="#475766"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.333 15.5H21.6663"
          stroke="#475766"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_896_79605"
          x="0"
          y="0"
          width="34"
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
            result="effect1_dropShadow_896_79605"
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
            result="effect1_dropShadow_896_79605"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_896_79605"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default PlusCircleIcon;
