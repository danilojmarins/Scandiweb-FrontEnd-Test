import React from 'react';


function MainPageHeader() {
    return (
        <div className='header'>
                <h1>Product List</h1>
                <button className='add-btn'>ADD</button>
                <button id='delete-product-btn' className='delete-btn'>MASS DELETE</button>
        </div>
    );
}

export default MainPageHeader;