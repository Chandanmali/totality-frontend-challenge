import { IconProp } from "@/types";

function Copyicon({ h, w, c }: IconProp) {
  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12C5 8.13401 8.13401 5 12 5C13.8565 5 15.637 5.7375 16.9497 7.05025C18.2625 8.36301 19 10.1435 19 12Z"
        stroke="#bdbdbd"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>{" "}
      <path
        d="M14.646 9.00002C13.0379 7.58179 10.5975 7.6838 9.11336 9.23129C7.62921 10.7788 7.62921 13.2213 9.11336 14.7688C10.5975 16.3162 13.0379 16.4182 14.646 15"
        stroke="#bdbdbd"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
}
export default Copyicon;
