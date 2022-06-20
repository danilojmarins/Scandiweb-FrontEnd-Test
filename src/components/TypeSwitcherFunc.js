import React from 'react';
import Form from 'react-bootstrap/Form';



const TypeSwitcherFunc = ({ setType, setDvdSpeci, setBookSpeci, setFurnitH, setFurnitW, setFurnitL, errors, Type }) => {


    // Reset input values everytime the Type is changed:
    const handleTypeChange = async (e) => {
        setType(e.target.value);
        setDvdSpeci('');
        setBookSpeci('');
        setFurnitH('');
        setFurnitW('');
        setFurnitL('');
    }


    // Set Size with value inserted in Size input:
    const handleSizeChange = async (e) => {
        setDvdSpeci(e.target.value);
    }


    // Set Weight with value inserted in Weight input:
    const handleWeightChange = async (e) => {
        setBookSpeci(e.target.value);
    }


    // Set Height with value inserted in Height input:
    const handleHeightChange = async (e) => {
        setFurnitH(e.target.value);
    }


    // Set Width with value inserted in Width input:
    const handleWidthChange = async (e) => {
        setFurnitW(e.target.value);
    }


    // Set Length with value inserted in Length input:
    const handleLengthChange = async (e) => {
        setFurnitL(e.target.value);
    }


    // Conditional Rendering, renders the inputs according to which Type was selected:
    if(Type === 'Select') {
        return(
            <Form.Group className='specifItem'>
                    <Form.Label className='label' for='type'>Type Switcher</Form.Label>
                    <Form.Control required as='select' id='productType' name='type' onChange={handleTypeChange}>
                        <option value='Select' selected>Select</option>
                        <option value='DVD'>DVD</option>
                        <option value='Book'>Book</option>
                        <option value='Furniture'>Furniture</option>
                    </Form.Control>
                    <Form.Control.Feedback type='invalid' className='feedback'>{errors.Type}</Form.Control.Feedback>
            </Form.Group>
        )
    } else if (Type === 'DVD') {
        return(
            <div>
                <Form.Group className='specifItem'>
                        <Form.Label className='label' for='type'>Type Switcher</Form.Label>
                        <Form.Select id='productType' name='type' onChange={handleTypeChange}>
                            <option value='Select'>Select</option>
                            <option value='DVD'>DVD</option>
                            <option value='Book'>Book</option>
                            <option value='Furniture'>Furniture</option>
                        </Form.Select>
                </Form.Group>

                <Form.Group className='specifItem'>
                    <Form.Label className='label'>Size (MB)</Form.Label>
                    <Form.Control className='field' autoComplete='off' type='text' id='size' name='Specification' onChange={handleSizeChange}></Form.Control>
                    <Form.Control.Feedback type='invalid' className='feedback'>{errors.DvdSpeci}</Form.Control.Feedback>
                </Form.Group>
            </div>
        )
    } else if (Type === 'Book') {
        return(
            <div>
                <Form.Group className='specifItem'>
                            <Form.Label className='label' for='type'>Type Switcher</Form.Label>
                            <Form.Select id='productType' name='type' onChange={handleTypeChange}>
                                <option value='Select'>Select</option>
                                <option value='DVD'>DVD</option>
                                <option value='Book'>Book</option>
                                <option value='Furniture'>Furniture</option>
                            </Form.Select>
                </Form.Group>

                <Form.Group className='specifItem'>
                    <Form.Label className='label'>Weight (KG)</Form.Label>
                    <Form.Control className='field' autoComplete='off' type='text' id='weight' name='Specification' onChange={handleWeightChange}></Form.Control>
                    <Form.Control.Feedback type='invalid' className='feedback'>{errors.BookSpeci}</Form.Control.Feedback>
                </Form.Group>
            </div>
        )
    } else if (Type === 'Furniture') {
        return(
            <div>
                <Form.Group className='specifItem'>
                            <Form.Label className='label' for='type'>Type Switcher</Form.Label>
                            <Form.Select id='productType' name='type' onChange={handleTypeChange}>
                                <option value='Select'>Select</option>
                                <option value='DVD'>DVD</option>
                                <option value='Book'>Book</option>
                                <option value='Furniture'>Furniture</option>
                            </Form.Select>
                </Form.Group>

                <Form.Group className='specifItem'>
                    <Form.Label className='label'>Height (CM)</Form.Label>
                    <Form.Control className='field' autoComplete='off' type='text' id='height' name='Specification' onChange={handleHeightChange}></Form.Control>
                    <Form.Control.Feedback type='invalid' className='feedback'>{errors.FurnitH}</Form.Control.Feedback>
                </Form.Group>
    
                <Form.Group className='specifItem'>
                    <Form.Label className='label'>Width (CM)</Form.Label>
                    <Form.Control className='field' autoComplete='off' type='text' id='width' name='Specification' onChange={handleWidthChange}></Form.Control>
                    <Form.Control.Feedback type='invalid' className='feedback'>{errors.FurnitW}</Form.Control.Feedback>
                </Form.Group>
    
                <Form.Group className='specifItem'>
                    <Form.Label className='label'>Length (CM)</Form.Label>
                    <Form.Control className='field' autoComplete='off' type='text' id='length' name='Specification' onChange={handleLengthChange}></Form.Control>
                    <Form.Control.Feedback type='invalid' className='feedback'>{errors.FurnitL}</Form.Control.Feedback>
                </Form.Group>
            </div>
        )
    }

}

export default TypeSwitcherFunc;