import React from 'react'
import {Box} from '@mui/material'
import {BrowserRouter , Routes , Route} from 'react-router-dom'

import { ChannelDetail ,Feed , Navbar ,SearchFeed ,VideoDetails } from './componenet' ;
const App = ()=> (
<BrowserRouter>
<Box sx={{backgroundColor:"#000"}}>
  <Navbar/>

  <Routes>

    <Route path='/channel/:id' element={<ChannelDetail/>} />
    <Route path='/video/:id' element={<VideoDetails/>} />
    <Route path='/' element={<Feed/>} />
    <Route path='/search/:searchTerm' element={<SearchFeed/>} />
    <Route path='/video/:id' element={<VideoDetails/>} />

  </Routes>

</Box>
</BrowserRouter>

)

export default App
