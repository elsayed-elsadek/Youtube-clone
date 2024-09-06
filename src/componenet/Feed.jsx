import {useEffect ,useState} from 'react'
import { Stack , Box ,Typography } from '@mui/material'
import Sidebar from './Sidebar' ;
import { fetchfromApi } from '../utils/fetchFromAPI';
import Videos from './Videos';
function Feed() {
const [selectedcategory ,setselectedcategory] =useState('New')
const [videos ,setvideos] =useState([]);
useEffect(()=>{
fetchfromApi(`search?part=snippet&q=${selectedcategory}`)
.then((data)=>{setvideos(data.items)})
;
},[selectedcategory]);


  return (
    <Stack sx={{ flexDirection:{ sx :
    'column', md:'row'}}}>
      <Box sx={{height: {sx:'auto' ,md:'92vh'} , borderRight:'1px solid #3d3d3d' , px:{sx:0 ,md:2}}}>
      <Sidebar selectedcategory={selectedcategory} 
      setselectedcategory ={setselectedcategory} />

<Typography className='copyright' variant='body2'
 sx={{mt:1.5  , color :"#fff"}}
>
Copyright 2024 JSM Media
</Typography>
      </Box>

<Box p={2} sx={{overflowY:'auto', height:'90vh' , flex:2}} >
   <Typography variant='h4' fontWeight={'bold'} mb={2}  sx={{ color:'white'}}>
  {selectedcategory}  <span style={{color:'#F31503'}}>Videos</span>
   </Typography>

   <Videos videos={videos}/>
</Box>

    </Stack>
  )
}

export default Feed
