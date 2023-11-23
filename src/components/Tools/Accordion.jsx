import { useState } from "react";

export default function Accordion({ useCases, size = "large" }) {
  const [currentlyExpanded, setCurrentlyExpanded] = useState(0);

  const accordion = useCases?.map((elem, idx) => {
    return (
      <div
        key={idx}
        className={
          (idx == 0
            ? "rounded-t-xl border-[2px]"
            : idx == useCases.length - 1
              ? "rounded-b-xl border-[2px] border-t-0"
              : "border-[2px] border-t-0") +
          (useCases.length == 1 ? " rounded-b-xl border-[2px]" : "") +
          " p-4 border-gray-300"
        }
      >
        <h2 className="mb-0" id={elem.heading}>
          <button
            type="button"
            className={
              "group relative flex w-full items-center rounded-t-[15px] text-left font-medium text-dark-600 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:text-primary-500 [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(210,210,210)] " +
              (size == "small"
                ? " py-1 pb-3 px-2 text-md"
                : " py-4 px-5 text-xl")
            }
            onClick={() => {
              setCurrentlyExpanded(idx);
            }}
            // data-te-collapse-init
            data-te-collapse-collapsed={idx == 0 ? "false" : "true"}
            // data-te-target={"#" + elem.heading + "target"}
            // aria-expanded={idx == 0 ? "true" : "false"}
            // aria-expanded={currentlyExpanded === idx ? "true" : "false"}
            // aria-controls={elem.heading + "target"}
          >
            {elem.heading}
            <span className="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 motion-reduce:transition-none fill-blue-300 group-[[data-te-collapse-collapsed]]:fill-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </button>
        </h2>
        {/* Item Content */}
        <div
          id={elem.heading + "target"}
          className={"!visible " + (currentlyExpanded != idx && "hidden")}
          // className={"!visible hidden"}
          data-te-collapse-item
          // data-te-collapse-show={currentlyExpanded == idx ? "true" : "false"}
          aria-labelledby={elem.heading}
          // data-te-parent="#accordionExample"
        >
          <div
            className={
              size == "small" ? " py-1 px-2 text-sm" : " py-4 px-5 text-xl"
            }
          >
            {elem.content}
          </div>
        </div>
      </div>
    );
  });

  return (
    <div
      // id="accordion-dropdown"
      className="w-full flex flex-col items-center h-fit rounded-2xl bg-gray-200"
    >
      <div
        // id="accordionExample"
        className="w-full h-full"
      >
        {accordion}
      </div>
    </div>
  );
}
