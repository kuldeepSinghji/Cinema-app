import * as React from 'react';
import {useState,useEffect} from "react"
import axios from "axios"
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import YouTubeIcon from "@material-ui/icons/YouTube"
import Carousel from '../Carousel/Carousel';
import "./ContentModal.css"
import mg from "./Profile.jpg"
// import Typography from '@mui/material/Typography';

const style = {  
    position: 'absolute',
    display:"flex",
    justifyContent:"center",
    alienItem:"center",
    width: "80%",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function ContentModal({children,media_Type,id}) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [content, setContent] = useState([])
    const [video, setVideo] = useState()
    console.log(media_Type,id,"mediaddfd")
    const fetchData = async ()=>{
      const {data} = await axios.get(`https://api.themoviedb.org/3/${media_Type}/${id}?api_key=531c48a160d92da0da1d33264683e77d&language=en-US`)
      setContent(data)
  }
    const fetchVideo = async ()=>{
      const {data} = await axios.get(`https://api.themoviedb.org/3/${media_Type}/${id}/videos?api_key=531c48a160d92da0da1d33264683e77d&language=en-US`)
      setVideo(data.results[0]?.key)
      console.log(data)
  }

  useEffect(() => {
    fetchData();
    fetchVideo();
  }, [])
  
  return (
    <>
      <div onClick={handleOpen} className="media">{children}</div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
            {/* <div style={{disable:"flex",justifyContent:"center",alienItem:"center",MinHeight:"90%"}}> */}
         {content &&  <Box sx={style}>
                <div className="ContentModal">
                    {/* <img className='Content_portrait' src={content.poster_path?`${"https://image.tmdb.org/t/p/w500"}/${content.poster_path}`:""} alt="notavilable" /> */}
                    {content.backdrop_path? <img className='Content_portrait' src={content.backdrop_path?`${"https://image.tmdb.org/t/p/w500"}/${content.backdrop_path}`:`${mg}`} alt="notavilable" />: <img src={mg} alt="available" className='image'  /> }
                    <div className="ContentModal_about">
                        <span className="ContenTModal_title">
                            {content.name || content.title}(
                                {(content.first_air_date || content.release_date || "....." 
                            ).substring(0,4)}
                            </span>
                            {content.tagline && (
                                <i className='tagline'>{content.tagline}</i>
                            )}
                            <span className="ContentModal_description">
                                {content.overview?.length>30?content.overview.slice(0,40):
                                content.overview}
                                </span>
                                <div>
                                    <Carousel media_Type={media_Type} id={id} />
                                </div>
                                <Button className="btn" variant="contained" startIcon={<YouTubeIcon/>} color="primary" target="_blank" href={`https://www.youtube.com/watch?v=${video}`}>
                                    Watch The Trailor
                                </Button>
                        </div>
                </div>            
          </Box>
}
           {/* </div> */}
        </Fade>
      </Modal>
    </>
  );
}
