import { IconProp } from "@/types";
import React from "react";

function LogoutIcon({ h, w, c }: IconProp) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={w}
      height={h}
      fill="none"
      viewBox="0 0 24 24"
    >
      <g fill={c}>
        <path d="M13 2a5 5 0 00-5 5 1 1 0 102 0 3 3 0 013-3h4a3 3 0 013 3v10a3 3 0 01-3 3h-4a3 3 0 01-3-3 1 1 0 10-2 0 5 5 0 005 5h4a5 5 0 005-5V7a5 5 0 00-5-5h-4z"></path>
        <path d="M14 11a1 1 0 110 2v-2zM5.718 11a38.459 38.459 0 001.027-1.325l.047-.063.012-.017.004-.007L6 9l.808.588a1 1 0 00-1.617-1.176l-.003.004-.01.014-.042.057-.16.216c-.14.184-.337.442-.57.736-.472.595-1.068 1.31-1.613 1.854L2.086 12l.707.707c.545.545 1.141 1.26 1.613 1.854a37.88 37.88 0 01.73.952l.042.057.01.014.002.003a1 1 0 001.619-1.175l-.81.588.81-.588-.005-.007-.012-.017-.047-.063-.172-.23A39.987 39.987 0 005.718 13H14v-2H5.718z"></path>
      </g>
    </svg>
  );
}

export default LogoutIcon;
