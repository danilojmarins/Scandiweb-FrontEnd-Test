import React from 'react';


function AddPageHeader() {
    return (
        <div className='header'>
                <h1>Product Add</h1>
                <button type='submit' className='save-btn'>Save</button>
                <button className='cancel-btn'>Cancel</button>
        </div>
    );
}

export default AddPageHeader;