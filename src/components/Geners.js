import { Chip } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect } from 'react'

const Geners = (props) => {
    const {setSelectedGeners,setGeners,geners,selectedGeners,setPage,type} = props;
    const fetchGeners = async()=>{
        const {data} = await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=531c48a160d92da0da1d33264683e77d&language=en-US`);
        // console.log(data["genres"],"genre")
        setGeners(data["genres"])
        // console.log(data["genres"],"you")
    }
    useEffect(() => {
      fetchGeners()
      return ()=>{
          setGeners({})
      }
      // eslint-disable-next-line
    }, [])
    const handleAdd = (genre)=>{
        setSelectedGeners([...selectedGeners,genre]);
        setGeners(geners.filter((e)=>e.id !== genre.id))
        setPage(1)
    }
    const handleRemove = (genre)=>{
        setSelectedGeners(selectedGeners.filter((e)=>e.id !== genre.id));
        setGeners([...geners,genre])
        setPage(1)
    }
  return (
      <div style={{padding:"6px 0px"}}>
          {selectedGeners && selectedGeners.map((e)=>(
               <Chip key={e.id} label={e.name} clickable size="small" style={{margin:"2px"}} color="secondary" onDelete={()=>handleRemove(e)} /> 
          ))}
          {geners && geners.map((e)=>(
               <Chip key={e.id} label={e.name} clickable size="small" style={{margin:"2px"}} onClick={()=>handleAdd(e)}/> 
          ))}
    </div>
  )
}

export default Geners;