import Search from '../Component/Search';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PeopleCard from '../Component/PeopleCard';
import Pagination from '../Component/Pagination';
import Loading from '../Component/Loading';
export default function People({movies,search, isLoading, handlesearch, closeopen, handleclose, currentPage, handlePageChange, totalResults}){
    const location = useLocation()
    const [animate, setAnimate] = useState(false)

    useEffect(() => {
        setAnimate(true);
        // Reset animation state after a short delay
        const timeoutId = setTimeout(() => {
            setAnimate(false);
        }, 300); // Adjust the duration as needed

        return () => clearTimeout(timeoutId);

    }, [location]);
    return (
        <div className={`page-container ${animate? 'animate-out' : ''}`}>
            <div className="Judul">People</div>
            <Search search={search} handlesearch={handlesearch} closeopen={closeopen} handleclose={handleclose} placeholder="Cari orang..." />
            <PeopleCard movies={movies} />

            <div className="LoadingContainer">
                {isLoading && <Loading />}
            </div>
            {(!isLoading&&movies.length < 1) && <h1>Not Found!</h1>}

            <Pagination data={totalResults} currentPage={currentPage} handlePageChange={handlePageChange}  />

        </div>
    )
}