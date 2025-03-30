import React from 'react'
import logo from '../../assets/images/new-removebg-preview.png';
import './Footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import Divider from '@mui/material/Divider';


import { Button, TextField } from '@mui/material';
const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-top'>
                <div className='footer-heading'>SALE UP TO 70% OFF FOR ALL CLOTHES & FASHION ITEMS, ON ALL BRANDS.</div>
            </div>
            <div className='border'></div>

            <div className='footer-mid'>
                <div className='footer-left'>
                    <img src={logo} className='footer-logo' alt='logo' />
                    <div className='tagline'>The best look anytime, anywhere.</div>
                </div>
                <div className='footer-center'>
                    <div className='her'>
                        <div className='for-her'>For Her</div>
                        <ul style={{ "list-style-type": "none" }}>
                            <li>Women Jeans</li>
                            <li>Tops and Shirts</li>
                            <li>Women Jackets</li>
                            <li>Heels and Flats</li>
                            <li>Women Accessories</li>
                        </ul>
                    </div>
                    <div className='him'>
                        <div className='for-him'>For Him</div>
                        <ul style={{ "list-style-type": "none" }}>
                            <li>Men Jeans</li>
                            <li>Men Shirts</li>
                            <li>Men Shoes</li>
                            <li>Men Jackets</li>
                            <li>Men Accessories</li>
                        </ul>
                    </div>
                </div>
                <div className='footer-right'>
                    <h2>Subscribe</h2>
                    <TextField className='email-input' id="outlined-basic" label="Your email address..." variant="outlined" />
                    <Button className='subscribe-button' variant="contained">Subscribe</Button>
                </div>

            </div>
            <div className='border'></div>

            <div className='footer-end'>

                <div>Copyright © 2025 Brandstore. Powered by Brandstore.</div>
                <div>
                    <FacebookIcon />
                    <YouTubeIcon />
                    <XIcon />
                    <InstagramIcon />
                </div>
            </div>
        </div>
    )
}

export default Footer