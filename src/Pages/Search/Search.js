import React,{useEffect, useState} from 'react'
// import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@material-ui/core/styles'
import { Button, Tab, Tabs } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
import SingleContent from '../../components/SingleContent/SingleContent'
import CustomPagination from '../../components/Pagination/CustomPagination'


const Search = () => {
  const [type, setType] = useState(0)
  const [page, setPage] = useState(1)
  const [searchText, setSearchText] = useState("")
  const [content, setContent] = useState([])
  const [totalPages, setTotalPages] = useState(1)
  const darkTheme = createTheme({
    palette:{
        type:"dark"
    }
})  

  const fetchSearch = async ()=>{
    const {data} =await axios.get(`https://api.themoviedb.org/3/search/${type?"tv":"movie"}?api_key=531c48a160d92da0da1d33264683e77d&language=en-US&query=${searchText}&page=${page}&include_adult=false`)
    console.log(data,"search")
    setContent(data.results)
    setTotalPages(data.total_pages)
  }

  useEffect(() => {
    window.scroll(0,0)
    fetchSearch()
    // eslint-disable-next-line
  }, [type,page])
  
  console.log(type,searchText,content,page,totalPages)
  return (
    <>
  <div style={{display:"flex"}}>
    <ThemeProvider theme={darkTheme}>
    <TextField
    style={{flex:1}}
    className="searchBox"
    label = "Search"
    varient="filled"
    onChange={(e)=>setSearchText(e.target.value)}
    />
    <Button variant="contained" style={{marginLeft:"5px",backgroundColor:"red",borderRadius:"4px" }} onClick={fetchSearch}><SearchIcon/></Button>
  </ThemeProvider>
  </div>
  {/* <div style={{display:"flex",margin:"10px 0px",justifyContent:"space-around",width:"100%"}}> */}
  <Tabs style={{width:"100%"}} value={type} indicatorColor="primary" textColor='primary' onChange={(event,newValue)=>{
    setType(newValue)
    setPage(1)
  }}>
    <Tab style={{width:"50%"}} label="Search Movies" />
    <Tab style={{width:"50%"}} label="Search Tv Series" />
  </Tabs>
  {/* </div> */}
  <div className="trending">
      {
        content && content.map((c)=>(
          <SingleContent key={c.id} id={c.id} poster={c.poster_path} title={c.title || c.name} date={c.first_air_date || c.release_date} media_Type={type?"tv":"movie"} vote_average={c.vote_average}/>
        ))
      }
      <div style={{margin:"10px 0px"}}>
      {
        !totalPages && (type?<h2>No Series Found</h2>:<h2>No Movies Found</h2>)
      }
      </div>
    </div>
    {totalPages > 1 &&
      <CustomPagination setPage={setPage} total_pages={totalPages}/>

    }

  </>
)
}

export default Search;