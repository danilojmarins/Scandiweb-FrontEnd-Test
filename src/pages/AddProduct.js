import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/AddProduct.scss';
import TypeSwitcherFunc from '../components/TypeSwitcherFunc';
import ky from 'ky';
import Form from 'react-bootstrap/Form';



const AddProduct = () => {

    const [SKU, setSKU] = useState('');
    const [Name, setName] = useState('');
    const [Price, setPrice] = useState('');
    const [Type, setType] = useState('Select');
    const [DvdSpeci, setDvdSpeci] = useState('');
    const [BookSpeci, setBookSpeci] = useState('');
    const [FurnitH, setFurnitH] = useState('');
    const [FurnitW, setFurnitW] = useState('');
    const [FurnitL, setFurnitL] = useState('');
    const [errors, setErrors] = useState({});

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const product = {SKU, Name, Price, Type, DvdSpeci, BookSpeci, FurnitH, FurnitW, FurnitL};

    const newErrors = {}


    // Validation of Errors:
    const productErrorsValidation = () => {


        if (!SKU || SKU === '') newErrors.SKU = 'SKU must be assigned a value';
        

        if (!Name || Name === '') newErrors.Name = 'Name must be assigned a value';


        if (!Price || Price === '') newErrors.Price = 'Price must be assigned a value';
        else if (NumberValidation(Price) === false) newErrors.Price = 'Price must contain only numbers';


        if(!Type || Type === '' || Type === 'Select') newErrors.Type = 'Choose a product type';

        else if (Type === 'DVD') {
            if (!DvdSpeci || DvdSpeci === '') newErrors.DvdSpeci = 'Size must be assigned a value';
            else if (NumberValidation(DvdSpeci) === false) newErrors.DvdSpeci = 'Size must contain only numbers';
        }

        else if (Type === 'Book') {
            if (!BookSpeci || BookSpeci === '') newErrors.BookSpeci = 'Weight must be assigned a value';
            else if (NumberValidation(BookSpeci) === false) newErrors.BookSpeci = 'Weight must contain only numbers';
        }

        else if (Type === 'Furniture') {
            if (!FurnitH || FurnitH === '') newErrors.FurnitH = 'Height must be assigned a value';
            else if (NumberValidation(FurnitH) === false) newErrors.FurnitH = 'Height must contain only numbers';

            if (!FurnitW || FurnitW === '') newErrors.FurnitW = 'Width must be assigned a value';
            else if (NumberValidation(FurnitW) === false) newErrors.FurnitW = 'Width must contain only numbers';

            if (!FurnitL || FurnitL === '') newErrors.FurnitL = 'Length must be assigned a value';
            else if (NumberValidation(FurnitL) === false) newErrors.FurnitL = 'Length must contain only numbers';
        }
        
        return newErrors;

    }


    // Validate if contain only numbers:
    function NumberValidation(num) {
        return /^[0-9.,]+$/.test(num);
    }


    // Send Post request to API:
    async function saveProduct(e) {

        e.preventDefault();

        const newErrors = productErrorsValidation();

        if(Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            console.log(errors);
        } else {

            ky.post('https://scandiweb-test-assignment-danilojmarins.000webhostapp.com/post.php', { body: JSON.stringify(product) })
            .then(res => {
                console.log(res.body);
                setSKU('');
                setName('');
                setPrice('');
                setType('');
                setDvdSpeci('');
                setBookSpeci('');
                setFurnitH('');
                setFurnitW('');
                setFurnitL('');
                routeChange();
            });
            
        }

    }


    // Redirect to main page:
    const navigate = useNavigate();
    const routeChange = () => {
        let path = '/';
        navigate(path);
    }


    // Set SKU with value inserted in SKU input:
    const handleSkuChange = async (e) => {
        setSKU(e.target.value);
    }


    // Set Name with value inserted in Name input:
    const handleNameChange = async (e) => {
        setName(e.target.value);
    }


    // Set Price with value inserted in Price input:
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
                <h1 className='add-h1'>Product Add</h1>
                <div className='add-btns'>
                    <button type='submit' className='save-btn' onClick={saveProduct}>Save</button>
                    <button className='cancel-btn' onClick={routeChange}>Cancel</button>
                </div>
            </div>

            <hr></hr>

            <div className='form'>
                <form id='product_form' method='post' >

                    <Form.Group className='item'>
                        <Form.Label className='label'>SKU</Form.Label>
                        <Form.Control className='field' autoComplete='off' type='text' id='sku' name='SKU' value={SKU} onChange={handleSkuChange} isInvalid={!!errors.SKU}></Form.Control>
                        <Form.Control.Feedback type='invalid' className='feedback'>{errors.SKU}</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className='item'>
                        <Form.Label className='label'>Name</Form.Label>
                        <Form.Control className='field' autoComplete='off' type='text' id='name' name='Name' value={Name} onChange={handleNameChange} isInvalid={!!errors.Name}></Form.Control>
                        <Form.Control.Feedback type='invalid' className='feedback'>{errors.Name}</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className='item'>
                        <Form.Label className='label'>Price ($)</Form.Label>
                        <Form.Control className='field' autoComplete='off' type='text' id='price' name='Price' value={Price} onChange={handlePriceChange} isInvalid={!!errors.Price}></Form.Control>
                        <Form.Control.Feedback type='invalid' className='feedback'>{errors.Price}</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className='item'>
                        <TypeSwitcherFunc setType={setType}
                                          setDvdSpeci={setDvdSpeci}
                                          setBookSpeci={setBookSpeci}
                                          setFurnitH={setFurnitH}
                                          setFurnitW={setFurnitW}
                                          setFurnitL={setFurnitL}
                                          errors={errors}
                                          Type={Type}
                                        />
                    </Form.Group>

                </form>
            </div>

            <div className='ft'>
                <hr className='footerHR'></hr>

                <div className='footer'>
                    <p>Scandiweb Test Assignment</p>
                </div>
            </div>

        </div>
    )
}

export default AddProduct;