import React from 'react';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';



const TypeSwitcherFunc = ({ setSpecification, specificationErrorsValidation, newSpecificationErrors, specificationErrors }) => {

    const [dvdSpeci, setDvdSpeci] = useState('');
    const [bookSpeci, setBookSpeci] = useState('');
    const [furnitH, setFurnitH] = useState('');
    const [furnitW, setFurnitW] = useState('');
    const [furnitL, setFurnitL] = useState('');
    const [type, setType] = useState('Select');


    // Reset input values everytime the Type is changed:
    const handleTypeChange = async (e) => {
        setType(e.target.value);
        setDvdSpeci('');
        setBookSpeci('');
        setFurnitH('');
        setFurnitW('');
        setFurnitL('');
        setSpecification('');
    }


    // Set Size with value inserted in Size input:
    const handleSizeChange = async (e) => {
        setDvdSpeci(e.target.value);
        console.log(dvdSpeci);

        setSpecification('Size: ' + e.target.value + ' MB');
    }


    // Set Weight with value inserted in Weight input:
    const handleWeightChange = async (e) => {
        setBookSpeci(e.target.value);
        console.log(bookSpeci);

        setSpecification('Weight: ' + e.target.value + 'KG');
    }


    // Set Height with value inserted in Height input:
    const handleHeightChange = async (e) => {

        setFurnitH(e.target.value);
        console.log(furnitH);

        setSpecification('Dimension: ' + e.target.value + 'x' + furnitW + 'x' + furnitL);
    }


    // Set Width with value inserted in Width input:
    const handleWidthChange = async (e) => {
        setFurnitW(e.target.value);
        console.log(furnitW);

        setSpecification('Dimension: ' + furnitH + 'x' + e.target.value + 'x' + furnitL);
    }


    // Set Length with value inserted in Length input:
    const handleLengthChange = async (e) => {
        setFurnitL(e.target.value);
        console.log(furnitL);

        setSpecification('Dimension: ' + furnitH + 'x' + furnitW + 'x' + e.target.value);
    }


    // Pass the function validateSpecification() to the parent component:
    React.useEffect(() => {
        specificationErrorsValidation.current = validateSpecification;
    })


    // Validation of errors in Specification inputs:
    function validateSpecification() {

        if(type === 'Selected') newSpecificationErrors.Type = 'Choose a product type';
        else if (type === 'DVD') {
            if (!dvdSpeci || dvdSpeci === '') newSpecificationErrors.Specification = 'Size must be assigned a value';
            else if (isNaN(parseFloat(dvdSpeci))) newSpecificationErrors.Specification = 'Size must contain only numbers';
        }
        else if (type === 'Book') {
            if (!bookSpeci || bookSpeci === '') newSpecificationErrors.Specification = 'Weight must be assigned a value';
            else if (isNaN(parseFloat(bookSpeci))) newSpecificationErrors.Specification = 'Weight must contain only numbers';
        }
        else if (type === 'Furniture') {
            if (!furnitH || furnitH === '') newSpecificationErrors.furnitH = 'Height must be assigned a value';
            else if (isNaN(parseFloat(furnitH))) newSpecificationErrors.furnitH = 'Height must contain only numbers';

            if (!furnitW || furnitW === '') newSpecificationErrors.furnitW = 'Width must be assigned a value';
            else if (isNaN(parseFloat(furnitW))) newSpecificationErrors.furnitW = 'Width must contain only numbers';

            if (!furnitL || furnitL === '') newSpecificationErrors.furnitL = 'Length must be assigned a value';
            else if (isNaN(parseFloat(furnitL))) newSpecificationErrors.furnitL = 'Length must contain only numbers';
        }

        return newSpecificationErrors;

    }


    // Conditional Rendering, renders the inputs according to which Type was selected:
    if(type === 'Select') {
        return(
            <Form.Group className='item'>
                    <Form.Label className='label' for='type'>Type Switcher</Form.Label>
                    <Form.Control required as='select' id='productType' name='type' onChange={handleTypeChange}>
                        <option value='Select' selected>Select</option>
                        <option value='DVD'>DVD</option>
                        <option value='Book'>Book</option>
                        <option value='Furniture'>Furniture</option>
                        <Form.Control.Feedback type='invalid' className='feedback'>{specificationErrors.Type}</Form.Control.Feedback>
                    </Form.Control>
            </Form.Group>
        )
    } else if (type === 'DVD') {
        return(
            <div>
                <Form.Group className='item'>
                        <Form.Label className='label' for='type'>Type Switcher</Form.Label>
                        <Form.Select id='productType' name='type' onChange={handleTypeChange}>
                            <option value='Select'>Select</option>
                            <option value='DVD'>DVD</option>
                            <option value='Book'>Book</option>
                            <option value='Furniture'>Furniture</option>
                        </Form.Select>
                </Form.Group>

                <Form.Group className='item'>
                    <Form.Label className='label'>Size (MB)</Form.Label>
                    <Form.Control className='field' autoComplete='off' type='text' id='size' name='Specification' value={dvdSpeci} onChange={handleSizeChange}></Form.Control>
                    <Form.Control.Feedback type='invalid' className='feedback'>{specificationErrors.Specification}</Form.Control.Feedback>
                </Form.Group>
            </div>
        )
    } else if (type === 'Book') {
        return(
            <div>
                <Form.Group className='item'>
                            <Form.Label className='label' for='type'>Type Switcher</Form.Label>
                            <Form.Select id='productType' name='type' onChange={handleTypeChange}>
                                <option value='Select'>Select</option>
                                <option value='DVD'>DVD</option>
                                <option value='Book'>Book</option>
                                <option value='Furniture'>Furniture</option>
                            </Form.Select>
                </Form.Group>

                <Form.Group className='item'>
                    <Form.Label className='label'>Weight (KG)</Form.Label>
                    <Form.Control className='field' autoComplete='off' type='text' id='weight' name='Specification' value={bookSpeci} onChange={handleWeightChange}></Form.Control>
                    <Form.Control.Feedback type='invalid' className='feedback'>{specificationErrors.Specification}</Form.Control.Feedback>
                </Form.Group>
            </div>
        )
    } else if (type === 'Furniture') {
        return(
            <div>
                <Form.Group className='item'>
                            <Form.Label className='label' for='type'>Type Switcher</Form.Label>
                            <Form.Select id='productType' name='type' onChange={handleTypeChange}>
                                <option value='Select'>Select</option>
                                <option value='DVD'>DVD</option>
                                <option value='Book'>Book</option>
                                <option value='Furniture'>Furniture</option>
                            </Form.Select>
                </Form.Group>

                <Form.Group className='item'>
                    <Form.Label className='label'>Height (CM)</Form.Label>
                    <Form.Control className='field' autoComplete='off' type='text' id='height' name='Specification' value={furnitH} onChange={handleHeightChange}></Form.Control>
                    <Form.Control.Feedback type='invalid' className='feedback'>{specificationErrors.furnitH}</Form.Control.Feedback>
                </Form.Group>
    
                <Form.Group className='item'>
                    <Form.Label className='label'>Width (CM)</Form.Label>
                    <Form.Control className='field' autoComplete='off' type='text' id='width' name='Specification' value={furnitW} onChange={handleWidthChange}></Form.Control>
                    <Form.Control.Feedback type='invalid' className='feedback'>{specificationErrors.furnitW}</Form.Control.Feedback>
                </Form.Group>
    
                <Form.Group className='item'>
                    <Form.Label className='label'>Length (CM)</Form.Label>
                    <Form.Control className='field' autoComplete='off' type='text' id='length' name='Specification' value={furnitL} onChange={handleLengthChange}></Form.Control>
                    <Form.Control.Feedback type='invalid' className='feedback'>{specificationErrors.furnitL}</Form.Control.Feedback>
                </Form.Group>
            </div>
        )
    }

}

export default TypeSwitcherFunc;