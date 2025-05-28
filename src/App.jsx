import './App.css';
import Data from './data.json';
import { useState } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;
  const lastIndex = currentPage * rowsPerPage;
  const firstIndex = lastIndex - rowsPerPage;
  const rows = Data.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(Data.length / rowsPerPage);
  const totalPagesDisplay = [...Array(totalPages + 1).keys()].slice(1);

  function previousPage() {
    if (currentPage !== firstIndex + 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function nextPage() {
    if (currentPage !== totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }

  function renderCurrentPage(page) {
    setCurrentPage(page);
  }

  return (


    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {Object.keys(Data[0]).map((key, i) => (
              <th scope="col" className="px-6 py-3" key={`th${i}`}>{key}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {rows.map((data, i) => (
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200" key={i}>
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{data.id}</td>
              <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{data.name}</td>
              <td className="px-6 py-4">{data.email}</td>
              <td className="px-6 py-4">{data.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <nav aria-label="Page navigation example" className="flex justify-center mt-16">
        <ul className="flex items-center -space-x-px h-10 text-base">
          <li className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer"
            onClick={previousPage}>
            <span className="sr-only">Previous</span>
            <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
            </svg>
          </li>

          {totalPagesDisplay.map((num, i) => (
            <li className={`${currentPage === num ? "active" : ""} flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer`} key={i}
              onClick={() => renderCurrentPage(num)}>
              {num}
            </li>
          ))}

          <li className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer"
            onClick={nextPage}>
            <span className="sr-only">Next</span>
            <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
            </svg>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default App;