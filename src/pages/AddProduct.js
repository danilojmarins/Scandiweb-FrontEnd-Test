import React from 'react';
import '../Styles/AddProduct.scss';

const AddProduct = () => {
    return(
        <div className='addProduct'>
            
            <div className='header'>
                <h1>Product Add</h1>
                <div className='btns'>
                    <button type='submit' className='save-btn'>Save</button>
                    <button className='cancel-btn'>Cancel</button>
                </div>
            </div>

            <hr></hr>

            <div className='form'>
                <form id='#product_form' method='post'>

                    <div className='item'>
                        <label className='label'>SKU</label>
                        <input type='text' id='sku'></input>
                    </div>

                    <div className='item'>
                        <label className='label'>Name</label>
                        <input type='text' id='name'></input>
                    </div>

                    <div className='item'>
                        <label className='label'>Price ($)</label>
                        <input type='text' id='price'></input>
                    </div>

                    <div className='item'>
                        <label className='label' for='type'>Type Switcher</label>
                        <select id='type' name='Type Switcher'>
                            <option value='select' selected>Select</option>
                            <option value='dvd'>DVD</option>
                            <option value='book'>Book</option>
                            <option value='furniture'>Furniture</option>
                        </select>
                    </div>

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