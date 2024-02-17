// Desc: Pagination component for displaying a list of items
const itemsPerPage = 20; // Number of items to display per page
const maxDisplayedPages = 5; // Maximum number of pages to display in the pagination

const Pagination = ({ data, currentPage, handlePageChange }) => {
  // Calculate the total number of pages
 
  const totalPages = Math.ceil(data / itemsPerPage);

  // Calculate start and end pages for dynamic pagination
  const startPage = Math.max(1, currentPage - Math.floor(maxDisplayedPages / 2));
  const endPage = Math.min(startPage + maxDisplayedPages - 1, totalPages);

  // Determine whether to display ellipsis for the start and end
  const showStartEllipsis = startPage > 1;
  const showEndEllipsis = endPage < totalPages;

  return (
    <div>
        
      
      {/* Display pagination buttons */}
      <div className='pagination'>
        <button disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)}>
          Prev
        </button>
        {showStartEllipsis && <span>...</span>}
        
        {Array.from({ length: endPage - startPage + 1 }).map((_, index) => (
          <button key={startPage + index} onClick={() => handlePageChange(startPage + index)}  className={`pagination-button ${currentPage === startPage + index ? 'pagination_active' : ''}`} >
            {startPage + index}
          </button>
        ))}
        
        {showEndEllipsis && <span>...</span>}
        <button disabled={currentPage === totalPages} onClick={() => handlePageChange(currentPage + 1)}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
