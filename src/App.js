import Header from "./components/Header";
import Hero from './assets/images/Hero.png'
import { useState, useEffect } from "react";
import req, { APIKey } from "./apis/movieApi";
import Movies from "./components/Movies";
import Series from "./components/Series";

function App() {

  const [searchTerm, setSearchTerm ] = useState('');
  const [ movieData, setMovieData ] = useState([])
  const [ seriesData, setSeriesData ] = useState([])
  const [ errorMessage, setErrorMessage ] = useState('')
  const [ searching, setSearching ] = useState(false)

  useEffect(() => {
    req
    .get(`?apiKey=${APIKey}&s=${'Harry'}&type=movie`)
    .then(res => {
      setMovieData(res.data.Search)
    })
    .catch(err => {
      console.log(err)
    });

    req
    .get(`?apiKey=${APIKey}&s=${'Legend'}&type=series`)
    .then(res => {
      setSeriesData(res.data.Search)
    })
    .catch(err => {
      console.log(err)
    });

  }, [])

  // search functionality
  useEffect(() => {

    if(searchTerm.length > 0) {
      req
      .get(`?apiKey=${APIKey}&s=${searchTerm}&type='movies`)
      .then( res => {
        setSearching(true)
        setErrorMessage(res.data.Error)
      })
      .catch(err => {
       console.log(err)
      })
    }
   return (() => setSearching(false))
  }, [searchTerm])

  return (

    <div>
      <section>
      <Header/> 
      <div className="relative h-1/2">
        <img src={Hero} alt='Hero' className='w-full object-cover'/>
        <div className=" absolute pl-0 lg:pl-12 top-0 left-0 w-full h-full flex
        justify-center lg:justify-start items-center">
        <p className="w-60 text-3xl md:text-6xl text-white lg:mb-12 text-center lg:text-left">Watch Something Incredible</p>
        </div>
      </div>
      </section>
      <section className="mt-2 px-4 lg:px-12">
      <div>
      <p> Search </p>
      </div>
      <input 
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="mt-2 w-full border border-black outline-none pl-3 rounded-sm"/>
      </section>

      <main className="pl-4 lg:pl-12 pb-6 lg:pb-12">
     {

     ( searching && searchTerm.length > 0) ? 
      <p>{errorMessage}</p> :

      <>
      <section className="mt-6">
       <p>
        Series
       </p>
       <Series seriesData={seriesData}/>
      </section>
      <section className="mt-6">
       <p>
        Movies
       </p>
       <Movies movieData={movieData}/>
      </section>
      </>
     }    
      </main>
    </div>
  );
}

export default App;
