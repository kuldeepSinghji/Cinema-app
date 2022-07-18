import { ThemeProvider } from '@emotion/react';
import { Pagination } from '@mui/material';
// import {createMuiTheme} from "@material-ui/core"
import { createTheme } from '@material-ui/core/styles'
import React from 'react'

const CustomPagination = (props) => {
  const handlePageChange = (page)=>{
    props.setPage(page)
    window.scroll(0,0)
  }
  const darkTheme = createTheme({
      palette:{
          type:"dark"
      }
  })
  return (
      <ThemeProvider theme={darkTheme}>
    <div style={{width:"100%",display:"flex",justifyContent:"center",margin:"5px 0px"}}><Pagination count={props.total_pages}  onChange={(e)=> handlePageChange(e.target.textContent)} hideNextButton hidePrevButton color='secondary'/></div>
    </ThemeProvider>
  )
}

export default CustomPagination;