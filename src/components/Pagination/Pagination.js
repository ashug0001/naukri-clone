import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import usePagination from "../../utils/usePagination";

const Pagination = ({
  page = 1,
  count = 1,
  onChange = () => null,
  siblingCount = 0,
}) => {
  const { items } = usePagination({
    page,
    count,
    onChange,
    siblingCount,
  });

  return (
    <div className="px-4 py-5 sm:px-6 ">
      <div className="flex-1 flex justify-between sm:hidden">
        <button
          onClick={() => onChange(page - 1)}
          className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          Previous
        </button>
        <button
          onClick={() => onChange(page + 1)}
          className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          Next
        </button>
      </div>
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-center">
        <nav
          className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px gap-2"
          aria-label="Pagination"
        >
          <button
            onClick={() => onChange(page - 1)}
            disabled={page < 2 ? true : false}
            className="relative inline-flex items-center px-2 py-2 
                      rounded-md border border-gray-300 bg-white 
                      text-sm font-medium text-gray-650 hover:bg-gray-50
                      disabled:border-primary/50 disabled:bg-[#edf6ff] disabled:hover:bg-[#edf6ff]"
          >
            <span className="sr-only">Previous</span>
            <ChevronLeftIcon
              className={`${page < 2 ? "text-gray-650/50" : ""} h-5 w-5`}
              aria-hidden="true"
            />
          </button>
          {items.map((item) =>
            item.type === "start-ellipsis" || item.type === "end-ellipsis" ? (
              <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 rounded-md">
                ...
              </span>
            ) : (
              <button
                {...item}
                className={`bg-white border-gray-300 text-primary relative 
                              inline-flex items-center px-4 py-2 border text-sm 
                              font-medium rounded-md
                              ${
                                item.selected
                                  ? "bg-blue/20 text-primary border-none"
                                  : ""
                              }
                              `}
                onClick={() => onChange(item.page < 2 ? 1 : item.page)}
              >
                {item.type === "page" ? item.page : ""}
              </button>
            )
          )}
          <button
            onClick={() => onChange(page + 1)}
            disabled={page === count ? true : false}
            className="relative inline-flex items-center px-2 py-2 
                      rounded-md border border-gray-300 bg-white 
                      text-sm font-medium text-gray-500 hover:bg-gray-50
                      disabled:border-primary/50 disabled:bg-[#edf6ff] disabled:hover:bg-[#edf6ff]"
          >
            <span className="sr-only">Next</span>
            <ChevronRightIcon
              className={`${page === count ? "text-gray-650/50" : ""} h-5 w-5`}
              aria-hidden="true"
            />
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Pagination;
