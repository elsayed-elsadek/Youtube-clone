import React from 'react'
import { logo } from '../utils/constants';
import {Link} from 'react-router-dom';
import { Stack } from '@mui/material';
import Searchbar from './Searchbar';

const Navbar = ()=> (
 
<Stack 
direction='row'
alignItems='center'
p={2}
sx={{position:'sticky' ,backgroundColor:"#000" ,
top:0 ,justifyContent:'space-between'}}
>
  <Link to="/" style={{display:'flex' ,
     alignItems:'center' }}>
      <img src={logo} alt="logo"  height={45}/>
  </Link>
  
<Searchbar/>

</Stack>

  )

export default Navbar
