import MovieCard from '../Component/MovieCard';
import Loading from '../Component/Loading';
import Search from '../Component/Search';
import Pagination from '../Component/Pagination'


export default function Home({totalResults, isLoading, movies, handlesearch, search, closeopen, handleclose,currentPage, handlePageChange}) {
    
    return (
        <>
            <div className="Judul">Discover Movies</div>
            <Search search={search}  handlesearch={handlesearch} closeopen={closeopen} handleclose={handleclose} placeholder={"Cari film..."} />
            <div className="LoadingContainer">
                    {isLoading && <Loading />}
            </div>
            <MovieCard movies={movies}  />
            {(!isLoading&&movies.length < 1) && <h1>Not Found!</h1>}
            <Pagination data={totalResults} currentPage={currentPage} handlePageChange={handlePageChange}  />
            
            </>
            
    )


}