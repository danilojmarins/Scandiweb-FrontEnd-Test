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
    const [Specification, setSpecification] = useState('');
    const [errors, setErrors] = useState({});
    const [specificationErrors, setSpecificationErrors] = useState({});
    const specificationErrorsValidation = React.useRef(null);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const product = {SKU, Name, Price, Specification};

    const newErrors = {}
    const newSpecificationErrors = {}


    // Validation of Errors:
    const productErrorsValidation = () => {


        if (!SKU || SKU === '') newErrors.SKU = 'SKU must be assigned a value';
        

        if (!Name || Name === '') newErrors.Name = 'Name must be assigned a value';


        if (!Price || Price === '') newErrors.Price = 'Price must be assigned a value';
        else if (isNaN(parseFloat(Price))) newErrors.Price = 'Price must contain only numbers';

        
        if (!Specification || Specification === '' || Specification === ' MB' || Specification === ' KG' || Specification === ' x  x ') newErrors.Specification = 'Specification must be assigned a value';

        return newErrors;

    }


    // Send Post request to API:
    async function saveProduct(e) {

        e.preventDefault();

        const newErrors = productErrorsValidation();
        const newSpecificationErrors = specificationErrorsValidation.current();

        if(Object.keys(newErrors).length > 0 || Object.keys(newSpecificationErrors).length > 0) {
            setErrors(newErrors);
            setSpecificationErrors(newSpecificationErrors);
        } else {

            ky.post('https://scandiweb-test-assignment-danilojmarins.000webhostapp.com/post.php', { body: JSON.stringify(product) })
            .then(res => {
                console.log(res.body);
                setSKU('');
                setName('');
                setPrice('');
                setSpecification('');
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

                    <TypeSwitcherFunc setSpecification={setSpecification}
                                      specificationErrorsValidation={specificationErrorsValidation}
                                      newSpecificationErrors={newSpecificationErrors}
                                      specificationErrors={specificationErrors}
                                      />

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