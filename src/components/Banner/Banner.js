import React from 'react'
import './Banner.css';
import { Button } from '@mui/material';

const Banner = (props) => {
    return (
        <div>
            <div className='parallax'>
                <div className="banner_container" style={{ backgroundImage: `url(${props.image})` }}>
                    <div className='content'>
                        <p className='heading1'>{props.heading}</p>
                        <p className='heading2'>{props.subheading}</p>
                        <Button variant="contained">{props.prm_btn}</Button>
                        <Button variant="outlined">{props.sec_btn}</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner