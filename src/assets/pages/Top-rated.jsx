import MovieCard from "../Component/MovieCard"
import Loading from "../Component/Loading"
import Pagination from "../Component/Pagination"
export default function TopRated({movies , isLoading, handlePageChange, currentPage, totalResults}) {
    return (
        <div>
            <div className="Judul">Top Rated</div>
            <MovieCard movies={movies} />
            <div className="LoadingContainer">
                {isLoading && <Loading />}
            </div>
            <Pagination handlePageChange={handlePageChange} currentPage={currentPage} data={totalResults} />


        </div>
    )
}