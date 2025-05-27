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
    <>
      <table className="table-auto">
        <thead>
          <tr>
            {Object.keys(Data[0]).map((key, i) => (
              <td key={`th${i}`}>{key}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((data, i) => (
            <tr key={i}>
              <td>{data.id}</td>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <nav className="page-nav">
        <ul className="page-items">
          {currentPage <= firstIndex &&
            <li className="page-item"
              onClick={previousPage}>
              prev
            </li>}

          {totalPagesDisplay.map((num, i) => (
            <li className={`${currentPage === num ? "active" : ""} page-item`} key={i}
              onClick={() => renderCurrentPage(num)}>
              {num}
            </li>
          ))}

          {currentPage !== totalPages &&
            <li className="page-item"
              onClick={nextPage}>
              next
            </li>}
        </ul>
      </nav>
    </>
  )
}

export default App;
