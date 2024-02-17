
function Pagination ({totalPages, currentPage, setCurrentPage, onPageChange}){
 
    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
        onPageChange(setCurrentPage);
      };

    return (
        <div className="pagination">
            <button className="pagination-previous" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>◁◁◁</button>
            <button className="pagination-next" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>▷▷▷</button>
        </div>
    );
}

export default Pagination