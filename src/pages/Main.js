import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
        let url = "http://localhost/Scandiweb-Backend-Test/get.php";
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

    const navigate = useNavigate();
    const routeChange = () => {
        let path = 'add-product';
        navigate(path);
    }

    return(
        <div className='main'>

            <div className='header'>
                <h1>Product List</h1>
                <div className='btns'>
                    <button className='add-btn' onClick={routeChange}>ADD</button>
                    <button id='#delete-product-btn' className='delete-btn'>MASS DELETE</button>
                </div>
            </div>

            <hr></hr>

            <div className='products'>
                <div className='product'>
                    <input className='delete-checkbox' type='checkbox' id='sku1'/>
                    <label for='sku1' className='check-label'><p><br></br><br></br>Product Information</p></label>
                </div>
                <div className='product'>
                    <input className='delete-checkbox' type='checkbox' id='sku2'/>
                    <label for='sku2' className='check-label'><p><br></br><br></br>Product Information</p></label>
                </div>
                <div className='product'>
                    <input className='delete-checkbox' type='checkbox' id='sku3'/>
                    <label for='sku3' className='check-label'><p><br></br><br></br>Product Information</p></label>
                </div>
                <div className='product'>
                    <input className='delete-checkbox' type='checkbox' id='sku4'/>
                    <label for='sku4' className='check-label'><p><br></br><br></br>Product Information</p></label>
                </div>
                <div className='product'>
                    <input className='delete-checkbox' type='checkbox' id='sku5'/>
                    <label for='sku5' className='check-label'><p><br></br><br></br>Product Information</p></label>
                </div>
                <div className='product'>
                    <input className='delete-checkbox' type='checkbox' id='sku6'/>
                    <label for='sku6' className='check-label'><p><br></br><br></br>Product Information</p></label>
                </div>
                <div className='product'>
                    <input className='delete-checkbox' type='checkbox' id='sku7'/>
                    <label for='sku7' className='check-label'><p><br></br><br></br>Product Information</p></label>
                </div>
                <div className='product'>
                    <input className='delete-checkbox' type='checkbox' id='sku8'/>
                    <label for='sku8' className='check-label'><p><br></br><br></br>Product Information</p></label>
                </div>
            </div>

            <hr className='footerHR'></hr>

            <div className='footer'>
                <p>Scandiweb Test Assignment</p>
            </div>

        </div>
    )

}

export default Main;