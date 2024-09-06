import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { fetchfromApi } from '../utils/fetchFromAPI'
import { Box ,Stack, Typography} from '@mui/material';
import ReactPlayer from 'react-player'
import { CheckCircle } from '@mui/icons-material';
import { Videos } from './'

function VideoDetails() {

  const [videoDetail ,setvideoDetail] =useState(null);
  const [videos ,setvideos] =useState(null);

  const { id } =useParams();

  useEffect(() => {
    fetchfromApi(`videos?part=snippet,statistics&id=${id}`)
    .then((data)=>setvideoDetail(data.items[0]));
    
    fetchfromApi(`search?part=snippet&relatedToVideoId=${id}`)
    .then((data)=>setvideos(data.items) )

  },[id]);
if (!videoDetail) return <Typography color='#fff'>Loading...</Typography>; 

  const {snippet :{title ,channelId ,channelTitle} ,statistics : {viewCount ,likeCount } } = videoDetail ;


  return (
    <Box minHeight='95vh' >
<Stack direction={{xs:'column' , md :'row'}}>
  <Box flex={1}>
    <Box sx={{width:'100%' , position:'sticky' , top:'86px'}}>
      <ReactPlayer className ="react-player" controls url={`https://www.youtube.com/watch?v=${id}` }
      />
   
      <Typography p={2} color='#fff' fontWeight='bold' >
   {title}
      </Typography>

<Stack direction='row' justifyContent='space-between' sx={ {color:'#fff'}}  px={2}>
<Link to={`/channel/${channelId}`}>
<Typography sx={{color:'#fff' }}
variant={{sm:'subtitle1' , md:'h6'}}>
  {channelTitle}
  <CheckCircle sx={{fontSize:'12px' , color:'gray' , ml:'5px' }}/>
</Typography>
</Link>
<Stack direction='row'  gap='20px' alignItems='center'>
<Typography variant='body2' sx={{opacity:'0.7' }}>
  {parseInt(viewCount).toLocaleString()} views
</Typography>
<Typography variant='body2' sx={{opacity:'0.7' }}>
  {parseInt(likeCount).toLocaleString()} likes
</Typography>
</Stack>

</Stack>



    </Box>

  </Box>
  <Box px={2} py={{md:1 , xs:5}} justifyContent='center' alignContent='center'>

<Videos videos={videos} direction='column'/>
</Box>
</Stack>

    </Box>
  
  )
}

export default VideoDetails
