import React from 'react'
import logo from '../../assets/images/logo.png';
import './NavBar.css'
import { Button, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom'; // Import Link for routing

const NavBar = () => {
    return (
        <div className='navbar'>
            <img src={logo} className='logo' alt='logo' />

            <div className='header_buttons'>
                <div className='header_buttons_primary'>
                    <Button>EVERYTHING</Button>
                    <Button>WOMEN</Button>
                    <Button>MEN</Button>
                    <Button>ACCESSORIES</Button>
                </div>

                <div className='header_buttons_secondary'>
                    {/* <Link to="/about"> */}
                        <Button>ABOUT</Button>
                    {/* </Link> */}
                    <Button>CONTACT US</Button>
                    <Button><AttachMoneyIcon fontSize="small" />0.00</Button>
                    <Button><ShoppingBasketIcon /></Button>
                    <Button><PersonIcon /></Button>
                </div>
            </div>

        </div>
    )
}

export default NavBar