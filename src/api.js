import axios from 'axios';


const baseURL = import.meta.env.VITE_BASEURL;
const apiKey =  import.meta.env.VITE_API_KEY;


export const getMovies = (page) => {
    return axios.get(`${baseURL}/discover/movie?api_key=${apiKey}&page=${page}`)
        
    
}
export const getMoviesSearch = (search, page) => {
    return axios.get(`${baseURL}/search/movie?api_key=${apiKey}&query=${search}&page=${page}`)
    
}
export const getMovieDetails = (id) => {
    return axios.get(`${baseURL}/movie/${id}?api_key=${apiKey}`)
    
}

export const getPopular = (page) => {
    return axios.get(`${baseURL}/movie/popular?api_key=${apiKey}&page=${page}`)
    
}

export const getNowPlaying = (page) => {
    return axios.get(`${baseURL}/movie/now_playing?api_key=${apiKey}&page=${page}`)
    
}

export const getTopRated = (page) => {
    return axios.get(`${baseURL}/movie/top_rated?api_key=${apiKey}&page=${page}`)
    
}

export const getPeople = (page) => {
    return axios.get(`${baseURL}/person/popular?api_key=${apiKey}&page=${page}`)
    
}

export const getPeopleDetails = (id) => {   
    return axios.get(`${baseURL}/person/${id}?api_key=${apiKey}`)
    
}

export const getPeopleSearch = (search) => {
    return axios.get(`${baseURL}/search/person?api_key=${apiKey}&query=${search}`)
    
}
