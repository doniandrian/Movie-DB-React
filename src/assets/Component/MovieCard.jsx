import { useNavigate} from 'react-router-dom';

export default function MovieCard({ movies }) {
    const navigate = useNavigate()

    function handleMovieClick(id) {
        navigate(`/detailfilm/${id}`)
    }

    return (
      <>
        <div className="MovieContainer" >
          {movies.map((movie, i) => (
            <div key={i} className="MovieCard" onClick={() => handleMovieClick(movie.id)}>
              <img className='gambar' src={import.meta.env.VITE_IMAGEURL + `${movie.poster_path}`} alt={movie.title} />
              <div className="MovieInfo">
                <h3>{movie.title}</h3>
                <p className='Date'>{movie.release_date}</p>
                {movie && movie.vote_average !== undefined && <p className='Rating'>{movie.vote_average.toFixed(1)}</p>}


              </div>
            </div>
          ))}
        </div>
      </>
    );
  }