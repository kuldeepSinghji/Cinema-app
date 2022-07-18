import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Geners from '../../components/Geners'
import CustomPagination from '../../components/Pagination/CustomPagination'
import SingleContent from '../../components/SingleContent/SingleContent'
import useGenres from '../../hooks/useGenre'
export const Movies = () => {
  const [page, setPage] = useState(1)
  const [content, setContent] = useState([])
  const [NumOfPages, setNumOfPages] = useState(10)
  const [selectedGeners, setSelectedGeners] = useState([])
  const [geners, setGeners] = useState([])
  const genreForURl = useGenres(selectedGeners);

  const fetchMovies = async()=>{
    const {data} = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=531c48a160d92da0da1d33264683e77d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreForURl}`);
    console.log(data,"data")
    setContent(data.results)
    setNumOfPages(data.total_pages)
  }
  useEffect(() => {
    fetchMovies()
    // eslint-disable-next-line
  }, [page,genreForURl])
  
  return (
    <>
    <div>
        <span className="pageTitle">Movies</span>
        <Geners type="movie" setGeners={setGeners} selectedGeners={selectedGeners} geners={geners} setSelectedGeners={setSelectedGeners} setPage={setPage} />
        <div className="trending">
      {
        content && content.map((c)=>(
          <SingleContent key={c.id} id={c.id} poster={c.poster_path} title={c.title || c.name} date={c.first_air_date || c.release_date} media_Type="movie" vote_average={c.vote_average}/>
        ))
      }
    </div>
    {NumOfPages > 1?
    <CustomPagination setPage={setPage} total_pages={NumOfPages}/>:""
}
    </div>
    </>
  )
}
