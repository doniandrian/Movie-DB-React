import MovieCard from "../Component/MovieCard"
import Pagination from "../Component/Pagination"

export default function Popular({movies, handlePageChange, currentPage, totalResults}) {
    return (
        <div>
            <div className="Judul">Popular</div>
            <MovieCard movies={movies} />
            <Pagination handlePageChange={handlePageChange} currentPage={currentPage} data={totalResults} />
        </div>
    )
}