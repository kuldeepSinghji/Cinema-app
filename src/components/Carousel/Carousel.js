import React,{useState,useEffect} from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import axios from "axios";
import "./Carousel.css"
import mg from "./Profile.jpg"
const Carousel = ({media_Type,id}) => {
  const handleDragStart = (e) => e.preventDefault();
  
  const [credits, setCredits] = useState([])
  const items = credits?.map((c)=>{
    return (<div className="carouselItem">
    <img src={c.profile_path?`${`https://image.tmdb.org/t/p/w300`}/${c.profile_path}`:`${mg}`} alt={c?.name} 
    onDragStart={handleDragStart} className="carouselItem_img" />
    <b className="carouselItem_txt">{c?.name}</b>
    </div>)
})
const responsive = {
  0:{
    items:3
  },
  512:{
    items:5
  },
  1024:{
    items:7
  }
}
const fetchCredits =async ()=>{
  const {data} = await axios.get(`https://api.themoviedb.org/3/${media_Type}/${id}/credits?api_key=531c48a160d92da0da1d33264683e77d&language=en-US`)
  setCredits(data.cast)
}
useEffect(()=>{
  fetchCredits()
},[])
console.log(credits)
return (
  <AliceCarousel autoPlay infinite disableDotsControls responsive={responsive} mouseTracking items={items} />
  );
}
export default Carousel;