import {useEffect ,useState} from 'react'
import {  Box ,Typography } from '@mui/material'
import { fetchfromApi } from '../utils/fetchFromAPI';
import Videos from './Videos';
import { useParams } from 'react-router-dom';

const SearchFeed = () => {
const [videos ,setvideos] =useState([]);
const {searchTerm} =useParams();
useEffect(()=>{
fetchfromApi(`search?part=snippet&q=${searchTerm}`)
.then((data) => setvideos(data.items))
;
},[searchTerm]);


  return (

    <Box p={2} sx={{overflowY:'auto', height:'90vh' , flex:2}} >
   <Typography variant='h4' fontWeight={'bold'} mb={2}  sx={{ color:'white'}}>
  Search Result For : <span style={{color:'#F31503'}}>
    {searchTerm}</span> Videos
   </Typography>

   <Videos videos={videos}/>
</Box>

  )
}

export default SearchFeed
