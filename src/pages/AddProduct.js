import React from 'react';
import { useEffect, useState } from 'react';
import '../Styles/AddProduct.scss';
import TypeSwitcher from '../components/TypeSwitcher';
import { useNavigate } from 'react-router-dom';



const AddProduct = () => {

    const initialValue = {SKU: '', Name: '', Price: '', Specification: ''};
    const [product, setProduct] = useState(initialValue);
    const [savingProduct, setSavingProduct] = useState(false);
    const [errors, setErrors] = useState({});

    const { SKU, Name, Price, Specification } = product;

    async function saveProduct(e) {
        e.preventDefault();
    } 


    const navigate = useNavigate();
    const routeChange = () => {
        let path = '/';
        navigate(path);
    }


    const changeProductData = e => {
        setProduct({...product, [e.target.name]: e.target.vaule});
        setErrors({});
    }


    return(
        <div className='addProduct'>
            
            <div className='header'>
                <h1>Product Add</h1>
                <div className='btns'>
                    <button type='submit' className='save-btn'>Save</button>
                    <button className='cancel-btn' onClick={routeChange}>Cancel</button>
                </div>
            </div>

            <hr></hr>

            <div className='form'>
                <form id='#product_form' method='post'>

                    <div className='item'>
                        <label className='label'>SKU</label>
                        <input type='text' id='sku' name='SKU' value={SKU} onChange={changeProductData}></input>
                    </div>

                    <div className='item'>
                        <label className='label'>Name</label>
                        <input type='text' id='name' name='Name' value={Name} onChange={changeProductData}></input>
                    </div>

                    <div className='item'>
                        <label className='label'>Price ($)</label>
                        <input type='text' id='price' name='Price' value={Price} onChange={changeProductData}></input>
                    </div>

                    <TypeSwitcher changeProductData={changeProductData} Specification={product.Specification}/>

                </form>
            </div>

            <hr></hr>

            <div className='footer'>
                <p>Scandiweb Test Assignment</p>
            </div>

        </div>
    )
}

export default AddProduct;