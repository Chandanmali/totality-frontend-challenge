import { IconProp } from "@/types";
import React from "react";

function HomeIcon({ h, w, c }: IconProp) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={w}
      height={h}
      viewBox="-1 0 19 19"
    >
      <g>
        <g fill="none" fillRule="evenodd" stroke="none" strokeWidth=".5">
          <g strokeWidth={"1"} fill={c} transform="translate(-341 -720)">
            <g transform="translate(56 160)">
              <path d="M299.875 576.212c0 .552-.476.788-1.063.788h-1.062c-.587 0-1.063-.236-1.063-.788v-1c0-1.105-.95-2.212-2.125-2.212h-2.125c-1.174 0-2.125 1.107-2.125 2.212v1c0 .552-.476.788-1.062.788h-1.063c-.586 0-1.062-.236-1.062-.788v-8.063c0-.133.056-.26.155-.354l5.458-5.136a1.109 1.109 0 011.503 0l5.479 5.156a.488.488 0 01.155.353v8.044zm2.125-8.587a.974.974 0 00-.31-.706l-6.692-6.33a2.221 2.221 0 00-3.007-.006l-6.679 6.265a.972.972 0 00-.312.708v9.656c0 1.105.95 1.788 2.125 1.788h3.188c1.174 0 2.125-.683 2.125-1.788v-1c0-.552.476-1 1.062-1 .587 0 1.063.448 1.063 1v1c0 1.105.95 1.788 2.125 1.788h3.187c1.174 0 2.125-.683 2.125-1.788v-9.587z"></path>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default HomeIcon;
