import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getPeopleDetails} from '../../api'
export default function MovieDetail() {
    const { people_id } = useParams()
    const [people, setpeople] = useState([])

    useEffect(() => {

        getPeopleDetails(people_id)
            .then((res) => {
                setpeople(res.data)
            })
            .catch((error) => {
                console.log(error)
            })

    }, [])

    return (
        <div className="MainDetailContainer">
            <h1 className='Judul'>DETAIL PEOPLE </h1>
            <div className="DetailContainer">
                <div className="DetailCard">
                    <img className='gambardetail' src={import.meta.env.VITE_IMAGEURL + `${people.profile_path}`} alt={people_id.title} />
                    <div className="DetailInfo">
                        <h1>{people.name}</h1>
                        <p className='Date'>Birthday: {people.birthday}</p>
                        <p className='Revenue'>Deathday: {people.deathday}</p>
                        <p className='Rating'>Rating: {people.vote_average}</p>
                        <p className='Rating'>Homepage: {people.homepage}</p>
                        <p className='Tagline'>known_for_department: {people.known_for_department}</p>
                        <p className='Overview'>Biography: {people.biography}</p>
                        <p>Gender: {people.gender == 2 ? "Male" : "Female"}</p>
                        <p>place_of_birth: {people.place_of_birth}</p>
                        <p>Popularity: {people.popularity}</p>


                    </div>
                </div>
            </div>
        </div>
    )
}