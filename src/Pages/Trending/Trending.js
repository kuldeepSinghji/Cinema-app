import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./Trending.css"
import SingleContent from '../../components/SingleContent/SingleContent'
import CustomPagination from '../../components/Pagination/CustomPagination'
const Trending = () => {
  const [content, setContent] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(10)
  const fetchTrending = async()=>{
    const {data} = await axios.get(`
     https://api.themoviedb.org/3/trending/all/day?api_key=531c48a160d92da0da1d33264683e77d&page=${page}`)
     console.log(data)
     setContent(data.results)
     setTotalPages(data.total_pages)
  }
  useEffect(() => {
    fetchTrending()
    // eslint-disable-next-line
  }, [page])
  
  return (
    <div>
    <span className="pageTitle">Trending</span>
    <div className="trending">
      {
        content && content.map((c)=>(
          <SingleContent key={c.id} id={c.id} poster={c.poster_path} title={c.title || c.name} date={c.first_air_date || c.release_date} media_Type={c.media_type} vote_average={c.vote_average}/>
        ))
      }
    </div>
    <CustomPagination setPage={setPage} total_pages={totalPages}/>
</div>
  )
}

export default Trending;