import React from 'react';


function AddPageForm() {
    return (
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
    );
}

export default AddPageForm;