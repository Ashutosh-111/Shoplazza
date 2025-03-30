import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import NavBar from '../../layouts/NavigationBar/NavBar';
import bannerImage1 from '../../assets/images/banner2.jpg';
import bannerImage2 from '../../assets/banner/banner-03.jpg';
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
import PublicIcon from '@mui/icons-material/Public'; // Import the icon
import './Home.css'
import Card from '../../components/Card/Card';
import ProductCard from '../../components/ProductCard/ProductCard';
import Banner from '../../components/Banner/Banner';
import Feature from '../../components/Feature/Feature';

const Home = () => {



  return (
    <div>
      <NavBar />
      {/* Parallax Scrolling */}
      <Banner image={bannerImage1} heading='Raining Offers for Hot Summers' subheading='25% of on all products' prm_btn='SHOP NOW' sec_btn='FIND MORE' />

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

      <div className='banner'>
        <Banner image={bannerImage2} heading='Special Edition' subheading='Buy This T-shirt At 20% Discount, Use Code OFF20' prm_btn='SHOP NOW' />
      </div>

      <div className='features'>
        <Feature icon={PublicIcon} heading='Worldwide Shipping' description='It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.' />

        <Feature icon={PublicIcon} heading='Worldwide Shipping' description='It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.' />

        <Feature icon={PublicIcon} heading='Worldwide Shipping' description='It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.' />

        <Feature icon={PublicIcon} heading='Worldwide Shipping' description='It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.' />


      </div>


    </div>

  )
}


export default Home