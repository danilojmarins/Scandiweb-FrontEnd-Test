import React from 'react';
import { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import '../Styles/Main.scss';



const Main = () => {

    const initialValue = {SKU: '', Name: '', Price: '', Specification: ''};
    const [product, setProduct] = useState(initialValue);
    const [products, setProducts] = useState([]);
    const [loadingProducts, setLoadingProducts] = useState(false);
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [errors, setErrors] = useState({});

    const { SKU, Name, Price, Specification } = product;

    async function getProducts() {
        setLoadingProducts(true);
        let url = "http://localhost/Server/";
        await fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setProducts(data)
        })
        .catch(function(error){
            console.error("Error in getting the products: " + error.message)
        })
        setLoadingProducts(false)
    }

    useEffect(() => {
        getProducts()
        document.title = 'Products List'
    }, [])

    return(
        <div className='main'>

            <div className='header'>
                <h1>Product List</h1>
                <button className='add-btn'>ADD</button>
                <button id='delete-product-btn' className='delete-btn'>MASS DELETE</button>
            </div>

            <div className='products'>
                <div className='product'>
                    <input className='delete-checkbox' type='checkbox' name='checkbox'/>
                    <label for='checkbox' className='check-label'><p>Product Information</p></label>
                </div>
            </div>

            <Footer/>

        </div>
    )

}

export default Main;