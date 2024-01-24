import React from "react";

function Pagination({ currentPage, setCurrentPage, totalPage }) {
  const page = new Array(totalPage);
  return (
    <nav ariaLabel="Page navigation example">
      <ul className="flex items-center -space-x-px h-10 text-base">
        <li
          onClick={() => {
            if (currentPage === 0) {
              return null;
            }
            setCurrentPage(currentPage - 1);
          }}
          className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 cursor-pointer"
        >
          <span className="sr-only">Previous</span>
          <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
          </svg>
        </li>

        {Array(totalPage)
          .fill()
          .map((_, index) => (
            <li
              onClick={() => setCurrentPage(index + 1)}
              className={`z-10 cursor-pointer flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 ${
                currentPage - 1 === index && "text-blue-600 border border-blue-300 bg-blue-50"
              } hover:bg-blue-100 hover:text-blue-700`}
            >
              {index + 1}
            </li>
          ))}

        <li
          onClick={() => {
            if (currentPage === totalPage) {
              return null;
            }
            setCurrentPage(currentPage + 1);
          }}
          className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 cursor-pointer"
        >
          <span className="sr-only">Next</span>
          <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
          </svg>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
