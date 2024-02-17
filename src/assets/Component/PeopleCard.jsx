import { useNavigate} from 'react-router-dom';

export default function PeopleCard({ movies }) {
    const navigate = useNavigate()

    function handleMovieClick(id) {
        navigate(`/detailpeople/${id}`)
    }

    return (
      <>
        <div className="MovieContainer" >
          {movies.map((movie, i) => (
            <div key={i} className="MovieCard" onClick={() => handleMovieClick(movie.id)}>
              <img className='gambar' src={import.meta.env.VITE_IMAGEURL + `${movie.profile_path}`} alt={movie.title} />
              <div className="MovieInfo">
                <h3>{movie.name}</h3>
                <p className='Date'>{movie.known_for_department}</p>
                <p className='Rating'>{movie.popularity.toFixed(1)}</p>
                
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }