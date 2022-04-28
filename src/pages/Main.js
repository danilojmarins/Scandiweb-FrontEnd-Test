import React from 'react';
import { useEffect, useState } from 'react';
import "../Styles/Main.scss";
import MainPageHeader from '../components/MainPageHeader';
import ProductsList from '../components/ProductsList';
import Footer from '../components/Footer';



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
            <MainPageHeader/>
            <ProductsList/>
            <Footer/>
        </div>
    )

}

export default Main;