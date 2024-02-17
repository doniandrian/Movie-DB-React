import MovieCard from "../Component/MovieCard"
import Pagination from "../Component/Pagination"
import Loading from "../Component/Loading"

export default function NowPlaying({movies, isLoading, handlePageChange, currentPage, totalResults}) {
    return (
        <div>
            <div className="Judul">Now Playing</div>
            <div className="LoadingContainer">
                {isLoading && <Loading />}
            </div>
            <MovieCard movies={movies} />
            <Pagination handlePageChange={handlePageChange} currentPage={currentPage} data={totalResults} />

        </div>
    )
}