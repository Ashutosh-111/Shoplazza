import { Button } from '@mui/material'
import React from 'react'
import NavBar from '../../layouts/NavigationBar/NavBar';
import banner2 from '../../assets/images/banner2.jpg'
import './Home.css'

const Home = () => {
  return (
    <div>
      <NavBar />
      <div className="banner_container">
        <img src={banner2} alt="Banner Image" className="banner_image" />
      </div>
      <div className='content'>
        <p className='heading1'>Raining Offers For Hot Summer!</p>
        <p className='heading2'>25% Off On All Products</p>
        <Button variant="contained">SHOP NOW</Button>
        <Button variant="outlined">FIND MORE</Button>
      </div>
    </div>
  )
}

export default Home