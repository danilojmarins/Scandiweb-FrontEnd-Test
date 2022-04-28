import React from 'react';
import AddPageHeader from '../components/AddPageHeader';
import Footer from '../components/Footer';
import AddPageForm from '../components/AddPageForm';

const AddProduct = () => {
    return(
        <div className='addProduct'>
            <AddPageHeader/>
            <AddPageForm/>
            <Footer/>
        </div>
    )
}

export default AddProduct;