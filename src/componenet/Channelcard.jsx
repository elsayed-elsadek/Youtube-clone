import React from 'react';
import { Link } from 'react-router-dom';
import { Box ,CardContent,CardMedia, Typography   } from '@mui/material';
import { demoProfilePicture } from '../utils/constants';
import { CheckCircle } from '@mui/icons-material';

function Channelcard( {channelDetail}) {
  
  return (
  <Box sx={{boxShadow:'none' 
  , borderRadius:'20px',
  display:'flex' ,
  justifyContent:'center',
  width:{xs:'356px' ,md:'320px'} ,
  height:'auto' ,
  marginTop:'-90px'
  
  }}>
<Link to={`/channel/${channelDetail.id.channelId}`}>
<CardContent sx={{display:'felx' , flexDirection:"column" ,
  justifyContent:"center" , textAlign:'center' ,
  color:'#fff'
}}>
<CardMedia image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
alt={channelDetail.snippet.title}
sx={{borderRadius:"50%" , high:'180px' ,width:'150px' }}

/>


<Typography variant='h6'>
  {channelDetail.snippet.title}
  <CheckCircle  sx={{fontSize:12 ,color: 'gray' , ml:'5px'}}/>
</Typography>


</CardContent>
</Link>

  </Box>  
  
  
  )
}

export default Channelcard
