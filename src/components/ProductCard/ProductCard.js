import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import product1 from '../../assets/product card images/product-m-jeans1.jpg'
import './ProductCard.css'
import { Rating } from '@mui/material';
const ProductCard = (props) => {
    return (
        <div>
            <Card className='product-card'>
                <CardContent>
                  <img className='product-card-image' src={props.image}/>
                  <p>{props.title}</p>
                  <p>${props.price}</p>
                  <Rating name="half-rating" defaultValue={props.rating} precision={0.5}/>
                </CardContent>
                {/* <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions> */}
            </Card>
        </div>
    )
}

export default ProductCard