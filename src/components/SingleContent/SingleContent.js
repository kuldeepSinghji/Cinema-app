import { Badge } from '@mui/material';
import React from 'react'
import "./SingleContent.css"
// import img from "./Profile.jpg"
import ContentModal from '../ContentModal/ContentModal';
const SingleContent = (props) => {
    // console.log(typeof props)
    const {id,poster,title,date,media_Type,vote_average,} = props;
    // console.log(title,"title")
    console.log(media_Type,"mediaSingle")
  return (
    <>
    <ContentModal media_Type={"movie"} id={id} >
      <Badge badgeContent={vote_average} color={vote_average > 6 ? "primary":"secondary"
    }/>
        <img className='poster' src={`${"https://image.tmdb.org/t/p/w300"}/${poster}`} alt="img" />
        <b className="title">{title}</b>
        <span className='subTitle'>{media_Type === "tv" ? "TV Series": "Movie"}
        <span className="subTitle">{date}</span>
        </span>
    </ContentModal>
    </>
  )
}

export default SingleContent