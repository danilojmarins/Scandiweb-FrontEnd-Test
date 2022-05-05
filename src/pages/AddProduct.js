import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/AddProduct.scss';
import TypeSwitcherFunc from '../components/TypeSwitcherFunc';




const AddProduct = () => {

    const [SKU, setSKU] = useState('');
    const [Name, setName] = useState('');
    const [Price, setPrice] = useState('');
    const [Specification, setSpecification] = useState('');
    const [savingProduct, setSavingProduct] = useState(false);
    const [errors, setErrors] = useState({});
    const [aviso, setAviso] = useState('');

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const product = {SKU, Name, Price, Specification};


    async function saveProduct(e) {

        e.preventDefault();

        setSavingProduct(true);

            let url = 'http://localhost/Scandiweb-Backend-Test/post.php';
            await fetch (url, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json' 
                },
                body: JSON.stringify(product)
            }).then(response => response.json())
            .then(data => {
                console.log(data);
                setSKU('');
                setName('');
                setPrice('');
                setSpecification('');
                routeChange();
            }).catch(function(error) {
                console.error(`Saving product failed: ${error.message}`)
                console.log(JSON.stringify(product));
            })

        setSavingProduct(false);

    }


    const navigate = useNavigate();
    const routeChange = () => {
        let path = '/';
        navigate(path);
    }


    const handleSkuChange = async (e) => {
        setSKU(e.target.value);
    }

    const handleNameChange = async (e) => {
        setName(e.target.value);
    }

    const handlePriceChange = async (e) => {
        setPrice(e.target.value);
    }


    useEffect(() => {
        console.log(product);
    }, [product]);


    return(
        <div className='addProduct'>
            
            <div className='header'>
                <h1>Product Add</h1>
                <div className='btns'>
                    <button type='submit' className='save-btn' onClick={saveProduct}>Save</button>
                    <button className='cancel-btn' onClick={routeChange}>Cancel</button>
                </div>
            </div>

            <hr></hr>

            <div className='form'>
                <form id='product_form' method='post' >

                    <div className='item'>
                        <label className='label'>SKU</label>
                        <input autoComplete='off' type='text' id='sku' name='SKU' value={SKU} onChange={handleSkuChange}></input>
                    </div>

                    <div className='item'>
                        <label className='label'>Name</label>
                        <input autoComplete='off' type='text' id='name' name='Name' value={Name} onChange={handleNameChange}></input>
                    </div>

                    <div className='item'>
                        <label className='label'>Price ($)</label>
                        <input autoComplete='off' type='text' id='price' name='Price' value={Price} onChange={handlePriceChange}></input>
                    </div>

                    <TypeSwitcherFunc setSpecification={setSpecification}/>

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