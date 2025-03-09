import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import NavBar from '../../layouts/NavigationBar/NavBar';
import banner2 from '../../assets/images/banner2.jpg'
import card1 from '../../assets/images/women-fashion-free-img.jpg';
import card2 from '../../assets/images/men-fashion-free-img.jpg';
import card3 from '../../assets/images/footwear-free-img.jpg';
import product1 from '../../assets/product card images/pexels-webdonut-19090.jpg'
import product2 from '../../assets/product card images/product-accessory1-400x400.jpg'
import product3 from '../../assets/product card images/product-accessory2-400x400.jpg'
import product4 from '../../assets/product card images/product-bag1-400x400.jpg'
import product5 from '../../assets/product card images/product-bag3-400x400.jpg'
import product6 from '../../assets/product card images/product-m-jeans1.jpg'
import product7 from '../../assets/product card images/product-w-jeans1-400x400.jpg'
import product8 from '../../assets/product card images/product-w-jeans2-400x400.jpg'
import product9 from '../../assets/product card images/product-w-jeans4-400x400.jpg'
import product10 from '../../assets/product card images/sports-shoe1-400x400.jpg'
// import './Card.css'
import './Home.css'
import Card from '../../components/Card/Card';
import ProductCard from '../../components/ProductCard/ProductCard';

const Home = () => {



  return (
    <div>
      <NavBar />
      {/* Parallax Scrolling */}
      <div className='parallax'>
        <div className="banner_container">
       
        </div>
      </div>

      <div className='content'>
        <p className='heading1'>Raining Offers For Hot Summer!</p>
        <p className='heading2'>25% Off On All Products</p>
        <Button variant="contained">SHOP NOW</Button>
        <Button variant="outlined">FIND MORE</Button>
      </div>

      <div className="card_section">
        <Card image={card1} title='image1' />
        <Card image={card2} title='image2' />
        <Card image={card3} title='image3' />
      </div>

      <div className='product-catalog'>
        <div className='catalog-heading'>Featured Products</div>
        <div className='catalog-cards'>
          <ProductCard image={product2} title='Boho Bangle Braclet' price='100' rating='4' />
          <ProductCard image={product3} title='Anchor Bracelet' price='100' rating='5' />
          <ProductCard image={product4} title='Light Brown Purse' price='100' rating='4.5' />
          <ProductCard image={product5} title='Bright Red Bag' price='100' rating='4' />
          <ProductCard image={product6} title='Dark Brown Jeans' price='100' rating='4.5' />
          <ProductCard image={product7} title='Blue Denim Shorts' price='100' rating='4.5' />
          <ProductCard image={product8} title='Blue Denim Jeans' price='100' rating='4.5' />
          <ProductCard image={product9} title='Basic Grey Jeans' price='100' rating='4' />
          <ProductCard image={product10} title='DNK Blue Shoes' price='100' rating='5' />
        </div>
      </div>

    </div>

  )
}


export default Home