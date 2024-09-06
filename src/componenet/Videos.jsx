import { Stack , Box} from '@mui/material'
import React from 'react'
import {Videocard , Channelcard} from './'
// import { demoThumbnailUrl ,demoVideoUrl , demoVideoTitle ,demoChannelTitle,demoChannelUrl  } from '../utils/constants'
function Videos({videos ,direction}) {
  
  if (!videos || videos.length === 0) {
    return <div></div>; // رسالة بديلة في حالة عدم وجود فيديوهات
  }
  return (
    <Stack 
    direction={ direction ||'row'} flexWrap='wrap' justifyContent='start' gap={2}>
        {videos.map((item ,idx) => (
            <Box key={idx}>
                {item.id.videoId && <Videocard videos ={item}/>} 
                {item.id.channelId && <Channelcard channelDetail ={item}/>}
            </Box>
        ))}
      
    </Stack>
  )
}

export default Videos
