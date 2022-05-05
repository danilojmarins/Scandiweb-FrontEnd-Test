import React, { useState } from 'react';


const TypeSwitcherFunc = ({ product, setSpecification }) => {

    const [dvdSpeci, setDvdSpeci] = useState('');
    const [bookSpeci, setBookSpeci] = useState('');
    const [furnitH, setFurnitH] = useState('');
    const [furnitW, setFurnitW] = useState('');
    const [furnitL, setFurnitL] = useState('');
    const [type, setType] = useState('Select');


    const handleTypeChange = async (e) => {
        setType(e.target.value);
        setDvdSpeci('');
        setBookSpeci('');
        setFurnitH('');
        setFurnitW('');
        setFurnitL('');
        setSpecification('');
    }


    const handleSizeChange = async (e) => {
        setDvdSpeci(e.target.value);
        console.log(dvdSpeci);

        setSpecification(e.target.value + ' MB');
    }


    const handleWeightChange = async (e) => {
        setBookSpeci(e.target.value);
        console.log(bookSpeci);

        setSpecification(e.target.value + ' KG');
    }


    const handleHeightChange = async (e) => {

        setFurnitH(e.target.value);
        console.log(furnitH);

        setSpecification(e.target.value + ' x ' + furnitW + ' x ' + furnitL);
    }


    const handleWidthChange = async (e) => {
        setFurnitW(e.target.value);
        console.log(furnitW);

        setSpecification(furnitH + ' x ' + e.target.value + ' x ' + furnitL);
    }


    const handleLengthChange = async (e) => {
        setFurnitL(e.target.value);
        console.log(furnitL);

        setSpecification(furnitH + ' x ' + furnitW + ' x ' + e.target.value);
    }

    if(type === 'Select') {
        return(
            <div className='item'>
                    <label className='label' for='type'>Type Switcher</label>
                    <select id='type' name='type' onChange={handleTypeChange}>
                        <option value='Select'>Select</option>
                        <option value='DVD'>DVD</option>
                        <option value='Book'>Book</option>
                        <option value='Furniture'>Furniture</option>
                    </select>
            </div>
        )
    } else if (type === 'DVD') {
        return(
            <div>
                <div className='item'>
                        <label className='label' for='type'>Type Switcher</label>
                        <select id='type' name='type' onChange={handleTypeChange}>
                            <option value='Select'>Select</option>
                            <option value='DVD'>DVD</option>
                            <option value='Book'>Book</option>
                            <option value='Furniture'>Furniture</option>
                        </select>
                </div>

                <div className='item'>
                    <label className='label'>Size (MB)</label>
                    <input autoComplete='off' type='text' id='size' name='Specification' value={dvdSpeci} onChange={handleSizeChange}></input>
                </div>
            </div>
        )
    } else if (type === 'Book') {
        return(
            <div>
                <div className='item'>
                            <label className='label' for='type'>Type Switcher</label>
                            <select id='type' name='type' onChange={handleTypeChange}>
                                <option value='Select'>Select</option>
                                <option value='DVD'>DVD</option>
                                <option value='Book'>Book</option>
                                <option value='Furniture'>Furniture</option>
                            </select>
                </div>

                <div className='item'>
                    <label className='label'>Weight (KG)</label>
                    <input autoComplete='off' type='text' id='weight' name='Specification' value={bookSpeci} onChange={handleWeightChange}></input>
                </div>
            </div>
        )
    } else if (type === 'Furniture') {
        return(
            <div>
                <div className='item'>
                            <label className='label' for='type'>Type Switcher</label>
                            <select id='type' name='type' onChange={handleTypeChange}>
                                <option value='Select'>Select</option>
                                <option value='DVD'>DVD</option>
                                <option value='Book'>Book</option>
                                <option value='Furniture'>Furniture</option>
                            </select>
                </div>

                <div className='item'>
                    <label className='label'>Height (CM)</label>
                    <input autoComplete='off' type='text' id='height' name='Specification' value={furnitH} onChange={handleHeightChange}></input>
                </div>
    
                <div className='item'>
                    <label className='label'>Width (CM)</label>
                    <input autoComplete='off' type='text' id='width' name='Specification' value={furnitW} onChange={handleWidthChange}></input>
                </div>
    
                <div className='item'>
                    <label className='label'>Length (CM)</label>
                    <input autoComplete='off' type='text' id='length' name='Specification' value={furnitL} onChange={handleLengthChange}></input>
                </div>
            </div>
        )
    }

}

export default TypeSwitcherFunc;