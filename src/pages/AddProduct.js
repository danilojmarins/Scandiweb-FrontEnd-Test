import React from 'react';
import Footer from '../components/Footer';
import '../Styles/AddProduct.scss';

const AddProduct = () => {
    return(
        <div className='addProduct'>
            
            <div className='header'>
                <h1>Product Add</h1>
                <button type='submit' className='save-btn'>Save</button>
                <button className='cancel-btn'>Cancel</button>
            </div>

            <div className='form'>
                <form id='#product_form' method='post'>

                    <label>SKU</label>
                    <input type='text' id='#sku'></input>

                    <label>Name</label>
                    <input type='text' id='#name'></input>

                    <label>Price ($)</label>
                    <input type='text' id='#price'></input>

                    <label>Type Switcher</label>
                    <input type='text' list='#productType' placeholder='Type Switcher'></input>
                    <datalist id='#productType'>
                        <option value='DVD'/>
                        <option value='Book'/>
                        <option value='Furniture'/>
                    </datalist>

                </form>
            </div>

            <Footer/>

        </div>
    )
}

export default AddProduct;