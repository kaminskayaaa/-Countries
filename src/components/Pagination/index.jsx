import React from "react";
import "./Pagination.css";

function Pagination({
  countItems,
  totalItems,
  paginate,
  currentPage = 1,
  maxPages = 5,
}) {
  const totalPages = Math.ceil(totalItems.length / countItems);
  const halfMaxPages = Math.floor(maxPages / 2);
  let startPage = 1;
  let endPage = totalPages;

  if (totalPages < maxPages) {
    maxPages = totalPages;
  } else if (currentPage <= halfMaxPages) {
    endPage = maxPages;
  } else if (currentPage + halfMaxPages >= totalPages) {
    startPage = totalPages - maxPages + 1;
  } else {
    startPage = currentPage - halfMaxPages;
    endPage = currentPage + halfMaxPages;
  }

  const pageNumbers = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

  return (
    <div className="pagination1">
      <div className="pagination">
        <div className={`page-item ${currentPage <= 1 ? "disabled" : ""}`}>
          <button onClick={() => paginate(currentPage - 1)} className="page-link page-link1 rozmir">
          🠔
          </button>
        </div>
        {totalPages < maxPages ? (
          <div className="page-item">
            <div className="page-link">{totalPages}</div>
          </div>
        ) : (
          pageNumbers.map((number) => (
            <div
              key={number}
              className={`page-item ${number === currentPage ? "active" : ""}`}
            >
              <button onClick={() => paginate(number)} className="page-link">
                {number}
              </button>
            </div>
          ))
        )}
        <div
          className={`page-item ${currentPage >= totalPages ? "disabled" : ""}`}
        >
          <button onClick={() => paginate(currentPage + 1)} className="page-link page-link2 rozmir">
          🠖
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pagination;
