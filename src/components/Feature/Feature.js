import React from 'react'
import PublicIcon from '@mui/icons-material/Public';
import './Feature.css';

const Feature = (props) => {
    return (
        <div className='feature'>
            <props.icon />
            <div className='feature-heading' >{props.heading}</div>
            <div className='feature-description'>{props.description}</div>
        </div>
    )
}

export default Feature