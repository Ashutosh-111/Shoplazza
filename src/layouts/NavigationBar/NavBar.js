import React from 'react'
import logo from '../../assets/images/logo.png';
import './NavBar.css'
import { Button, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom'; // Import Link for routing
import Login from '../../pages/Login/Login';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing

const NavBar = () => {

    const navigate = useNavigate(); // Initialize the navigate function


    const handleClick = () => {
        alert('working click');
        navigate('/login'); // Redirect to the login page when clicked
    }
    return (
        <div className='navbar'>
            <img src={logo} className='logo' alt='logo' onClick={() => navigate('/')} />

            <div className='header_buttons'>
                <div className='header_buttons_primary'>
                    <Button className='button1'>EVERYTHING</Button>
                    <Button className='button2'>WOMEN</Button>
                    <Button className='button3'>MEN</Button>
                    <Button className='button4'>ACCESSORIES</Button>
                </div>

                <div className='header_buttons_secondary'>
                    {/* <Link to="/about"> */}
                        <Button className='button5' onClick={() => navigate('/about')}>ABOUT</Button>
                    {/* </Link> */}
                    <Button className='button6'>CONTACT US</Button>
                    <Button className='button7'><AttachMoneyIcon fontSize="small" />0.00</Button>
                    <Button className='button8'><ShoppingBasketIcon /></Button>
                    <Button className='button9'><PersonIcon onClick={handleClick} /></Button>
                </div>
            </div>

        </div>
    )
}

export default NavBar