import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Home from './assets/pages/Home'
import Header from './assets/Component/Header'
import NowPlaying from './assets/pages/Now-playing'
import Popular from './assets/pages/Popular'
import TopRated from './assets/pages/Top-rated'
import People from './assets/pages/People'
import axios from 'axios'
import PeopleDetail from './assets/pages/PeopleDetail'
import Footer from './assets/Component/Footer'


import './App.css'
import './Header.css'
import { getMovies, getMoviesSearch, getNowPlaying, getPopular, getPeople, getTopRated, getPeopleSearch } from './api'
import MovieDetail from './assets/pages/MovieDetail'



function App() {
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('')
  const [closeopen, setcloseopen] = useState(false)
  const [isLoading, setLoading] = useState(false)
  const [location, setLocation] = useState('/')
  const [totalResults, setTotalResults] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)

  const handleLocation = (pathname) => {
    setLocation(pathname)
  }

  // ------------Change page Movies----------------
  const handlePageChange = (pageNumber) => {
    if (search.length > 1) {
      setCurrentPage(pageNumber);
      setLoading(true);
      getMoviesSearch(search, pageNumber)
        .then((res) => {
          setMovies(res.data.results);

          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;

    }
    setCurrentPage(pageNumber);

    setLoading(true);
    endpointToApi(location, pageNumber)
      .then((res) => {
        setMovies(res.data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // ------------Change page People----------------
  const handlePageChangePeople = (pageNumber) => {
    if (search.length > 1) {
      setCurrentPage(pageNumber);
      setLoading(true);
      getPeopleSearch(search, pageNumber)
        .then((res) => {
          setMovies(res.data.results);

          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;

    }
    setCurrentPage(pageNumber);

    setLoading(true);
    getPeople(pageNumber)
      .then((res) => {
        setMovies(res.data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };



  // -------------Fetch movies----------------
  useEffect(() => {
    if (location.startsWith('/detailfilm') || location.startsWith('/detailpeople')) {
      console.log('masuk ke detail film');
    }
    else if (search.length < 1) {
      setLoading(true);


      endpointToApi(location, currentPage)
        .then((res) => {
          setMovies(res.data.results);
          setTotalResults(res.data.total_results);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });


    }
    else {
      setLoading(true);
      getMoviesSearch(search, currentPage)
        .then((res) => {
          setMovies(res.data.results);
          setTotalResults(res.data.total_results);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [search, location, currentPage]);





  //clear search when location change
  useEffect(() => {
    setSearch('')
    setCurrentPage(1)
  }, [location])

  //reset page to 1 when search change
  useEffect(() => {
    setCurrentPage(1)
  }, [search])



  // ---------------Search Movies----------------
  function handlesearchmovies(search) {
    setSearch(search)
    setCurrentPage(1)
    if (search.length > 0) {
      setcloseopen(true)
    } else {
      setcloseopen(false)
    }
    if (search.length > 1) {
      setLoading(true)
      getMoviesSearch(search, currentPage)
        .then((res) => {
          setMovies(res.data.results)
          setTotalResults(res.data.total_results)
          setLoading(false)
        }), error => {
          console.log(error)
        }

    }
  }

  // ---------------HandleSearchPeople----------------
  function handlesearchpeople(search) {
    setSearch(search)
    setCurrentPage(1)
    if (search.length > 0) {
      setcloseopen(true)
    } else {
      setcloseopen(false)
    }
    if (search.length > 1) {
      setLoading(true)
      getPeopleSearch(search, currentPage)
        .then((res) => {
          setMovies(res.data.results)
          setTotalResults(res.data.total_results)
          setLoading(false)
        }), error => {
          console.log(error)
        }

    }
  }




  function handleclose() {
    setcloseopen(false)
    setSearch('')
  }


  return (
    <>
      <Router>
        <Header handleLocation={(pathname) => handleLocation(pathname)} />
        <Routes>
          <Route path='/' element={<Home movies={movies} totalResults={totalResults} isLoading={isLoading} handlesearch={handlesearchmovies}
            search={search} closeopen={closeopen} handleclose={handleclose}
            handlePageChange={(pageNumber) => handlePageChange(pageNumber)} currentPage={currentPage} />} />
          <Route path='/detailfilm/:movies_id' element={<MovieDetail movies={movies} />} />
          <Route path='/detailpeople/:people_id' element={<PeopleDetail movies={movies} />} />
          <Route path='/popular' element={<Popular movies={movies} handlePageChange={(pageNumber) => handlePageChange(pageNumber)} currentPage={currentPage} totalResults={totalResults} />} />
          <Route path='/now-playing' element={<NowPlaying movies={movies} handlePageChange={(pageNumber) => handlePageChange(pageNumber)} currentPage={currentPage} totalResults={totalResults} />} />
          <Route path='/top-rated' element={<TopRated movies={movies} handlePageChange={(pageNumber) => handlePageChange(pageNumber)} currentPage={currentPage} totalResults={totalResults} />} />
          <Route path='/people' element={<People movies={movies} isLoading={isLoading}  search={search}  handlesearch={handlesearchpeople} handleclose={handleclose} closeopen={closeopen}
            totalResults={totalResults} handlePageChange={(pageNumber) => handlePageChangePeople(pageNumber)} currentPage={currentPage} />} />
          <Route path='*' element={<><h1>PAGE NOT FOUND!</h1></>} />

        </Routes>

      </Router>
      <Footer />
    </>
  )
}

function endpointToApi(pathname, currentPage) {
  switch (pathname) {
    case '/':
      return getMovies(currentPage)
    case '/popular':
      return getPopular(currentPage)
    case '/now-playing':
      return getNowPlaying(currentPage)
    case '/top-rated':
      return getTopRated(currentPage)
    case '/people':
      return getPeople(currentPage)
    default:
      return null
  }
}

export default App
