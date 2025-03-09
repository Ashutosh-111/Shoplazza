import React from 'react'
import card1 from '../../assets/images/women-fashion-free-img.jpg';
import card2 from '../../assets/images/men-fashion-free-img.jpg';
import card3 from '../../assets/images/footwear-free-img.jpg';
import './Card.css'
import { Button } from '@mui/material';


// const images = [card1, ca/r/d2, card3]


const Card = (props) => {
    return (

        <div className='card'>
            <img src={props.image} alt='card' className='card_image' />
            <div className='card_text'>
                <h1>{props.title}</h1>
                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.</h4>
            </div>
            <div className='card_button'>
                <Button variant="contained">SHOP NOW</Button>
            </div>
        </div>

    )
}

export default Card