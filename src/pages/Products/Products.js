import React, { useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard.js';
import './Products.css';
const Products = () => {

    const [apiData, setApiData] = useState();

    // const api_url = "https://fakestoreapi.com/products";
    const fetchProducts = async () => {
        fetch("https://fakestoreapi.com/products")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setApiData(data);

            })
            .catch((err) => {
                console.log(err.message);
            })
    };

    useEffect(() => {
        fetchProducts();
    }, [])

    console.log('apiData', apiData);
    return (
        <div className='product-catalog'>
            <div className='catalog-cards'>
                {
                    apiData && apiData.map((data) => {
                        return (
                            <ProductCard id={data.id} image={data.image} price={data.price} rating={data.rating.rate} title={data.title} />
                        )
                    })
                }
            </div>
        </div>
    )

}

export default Products;