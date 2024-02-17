import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getMovieDetails } from '../../api'
export default function MovieDetail() {
    const { movies_id } = useParams()
    const [movies, setMovies] = useState([])

    useEffect(() => {

        getMovieDetails(movies_id)
            .then((res) => {
                setMovies(res.data)
            })
            .catch((error) => {
                console.log(error)
            })

    }, [])

    return (
        <div className="MainDetailContainer">
            <h1 className=''>DETAIL FILM</h1>
            <div className="DetailContainer">
                <div className="DetailCard">
                    <img className='gambardetail' src={import.meta.env.VITE_IMAGEURL + `${movies.poster_path}`} alt={movies_id.title} />
                    <div className="DetailInfo">
                        <h1>{movies.title}</h1>
                        <p className='Date'>Release Date: {movies.release_date}</p>
                        <p className='Revenue'>Revenue: {movies.revenue}</p>
                        <p className='Rating'>Rating: {movies.vote_average}</p>
                        <p className='Rating'>Popularity: {movies.popularity}</p>
                        <p className='Tagline'>Tagline: {movies.tagline}</p>
                        <p className='Overview'>Overview: {movies.overview}</p>
                        <p>Original Language: {movies.original_language}</p>
                        <p>Status: {movies.status}</p>
                        <p>Duration: {movies.runtime} minutes</p>


                    </div>
                </div>
            </div>
        </div>
    )
}