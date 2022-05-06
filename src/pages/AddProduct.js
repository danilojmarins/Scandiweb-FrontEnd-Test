import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/AddProduct.scss';
import TypeSwitcherFunc from '../components/TypeSwitcherFunc';
import axios from 'axios';
import Form from 'react-bootstrap/Form';




const AddProduct = () => {

    const [SKU, setSKU] = useState('');
    const [Name, setName] = useState('');
    const [Price, setPrice] = useState('');
    const [Specification, setSpecification] = useState('');
    const [savingProduct, setSavingProduct] = useState(false);
    const [errors, setErrors] = useState({});

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const product = {SKU, Name, Price, Specification};

    
    const productErrorsValidation = () => {

        const newErrors = {}

        if (!SKU || SKU === '') newErrors.SKU = 'SKU must be assigned a value';
        

        if (!Name || Name === '') newErrors.Name = 'Name must be assigned a value';


        if (!Price || Price === '') newErrors.Price = 'Price must be assigned a value';
        else if (isNaN(parseFloat(Price))) newErrors.Price = 'Price must contain only numbers';

        
        if (!Specification || Specification === '' || Specification === ' MB' || Specification === ' KG' || Specification === ' x  x ') newErrors.Specification = 'Specification must be assigned a value';

        return newErrors;

    }


    async function saveProduct(e) {

        e.preventDefault();

        const newErrors = productErrorsValidation();

        if(Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {

            setSavingProduct(true);

            /*
            let url = 'http://localhost/Scandiweb-Backend-Test/post.php';
            await fetch (url, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
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
            */

            axios.post('http://localhost/Scandiweb-Backend-Test/post.php', product)
            .then(res => {
                console.log(res.data);
                setSKU('');
                setName('');
                setPrice('');
                setSpecification('');
                routeChange();
            });

            setSavingProduct(false);

        }

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
        document.title = 'Add Product';
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

                    <Form.Group className='item'>
                        <Form.Label className='label'>SKU</Form.Label>
                        <Form.Control autoComplete='off' type='text' id='sku' name='SKU' value={SKU} onChange={handleSkuChange} isInvalid={!!errors.SKU}></Form.Control>
                        <Form.Control.Feedback type='invalid' className='feedback'>{errors.SKU}</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className='item'>
                        <Form.Label className='label'>Name</Form.Label>
                        <Form.Control autoComplete='off' type='text' id='name' name='Name' value={Name} onChange={handleNameChange} isInvalid={!!errors.Name}></Form.Control>
                        <Form.Control.Feedback type='invalid' className='feedback'>{errors.Name}</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className='item'>
                        <Form.Label className='label'>Price ($)</Form.Label>
                        <Form.Control autoComplete='off' type='text' id='price' name='Price' value={Price} onChange={handlePriceChange} isInvalid={!!errors.Price}></Form.Control>
                        <Form.Control.Feedback type='invalid' className='feedback'>{errors.Price}</Form.Control.Feedback>
                    </Form.Group>

                    <TypeSwitcherFunc setSpecification={setSpecification} errors={errors}/>

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