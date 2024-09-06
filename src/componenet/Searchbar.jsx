import React from 'react';
import { useState  } from 'react';
import {Search} from '@mui/icons-material'
import { IconButton, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const  Searchbar =() => {
  const [searchTerm ,setsearchTerm] =useState('');
  const navigate = useNavigate();


  const handelsubmit = (e) => {
e.preventDefault();
if(searchTerm){
  navigate(`/search/${searchTerm}`);
setsearchTerm('');
}
  };

  return (
<Paper Paper
component="form"
onSubmit={handelsubmit}
 sx={{borderRadius:20 ,
    border:'1px solid #e3e3e3',
    pl:2,
    boxShadow:'none',
    mr:{ sm: 5}
}}>
    <input 
    className='search-bar'
    placeholder='Search...'
    value={searchTerm}
    onChange={(e) => setsearchTerm(e.target.value)}
    />

    <IconButton type='submit' sx={
       { p:'10px' ,color:'red' }
    }>
<Search/>
    </IconButton>
</Paper>
  )
}

export default Searchbar
