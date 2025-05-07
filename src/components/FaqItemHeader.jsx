import React from "react";
import ArrowDown from "./icons/ArrowDown";

export default function FaqItemHeader({ title }) {
  return (
    <button
      type="button"
      className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
      data-accordion-target="#accordion-flush-body-2"
      aria-expanded="false"
      aria-controls="accordion-flush-body-2"
    >
      <span>{title}</span>
      <ArrowDown />
    </button>
  );
}
