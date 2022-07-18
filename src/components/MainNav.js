import * as React from 'react';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import TvIcon from '@mui/icons-material/Tv';
import SearchIcon from '@mui/icons-material/Search';
import {useNavigate} from "react-router-dom"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const history = useNavigate();
  // console.log(history.current)
  useEffect(() => {
    if(value===0){
        history("/")
    }else if(value === 1){
        history("/movies")
    }else if(value===2){
        history("/series")
    }else if(value===3){
        history("/search")
    }else if(value===4){
      history("/profile")
    }
  }, [value,history])
    
  return (
    <Box sx={{ width: "100%",position:"fixed",bottom:"0",color:"red",zIndex:"100"}}>
      <BottomNavigation
        showLabels
        value={value}
        style={{backgroundColor:"#ccc",display:"flex",justifyContent:"space-around",fontSize:"10px"}}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction style={{color:"red",paddingLeft:"30px"}} label="Trending" icon={<WhatshotIcon/>} />
        <BottomNavigationAction style={{color:"red"}} label="Movies" icon={<MovieCreationIcon/>} />
        <BottomNavigationAction style={{color:"red"}} label="Tv Series" icon={<TvIcon/>} />
        <BottomNavigationAction style={{color:"red"}} label="Search" icon={<SearchIcon/>} />
        <BottomNavigationAction style={{color:"red",paddingRight:"30px"}} label="Profile" icon={<AccountCircleIcon/>} />
      </BottomNavigation>
    </Box>
  );
}
