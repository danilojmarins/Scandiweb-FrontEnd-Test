import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Styles/Main.scss';


const Main = () => {

    const [products, setProducts] = useState([]); // array that stores the products data from API.
    const [selectedProducts, setSelectedProducts] = useState([]); // array that stores the ID of each selected product.


    // Send Get Request to API:
    async function getProducts() {

        let url = "https://scandiweb-test-assignment-danilojmarins.000webhostapp.com/index.php";
        await fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setProducts(data);
        })
        .catch(function(error){
            console.error("Error in getting the products: " + error.message);
        })

    }


    // Send Delete Request to API according to ID of the selected products:
    async function deleteProducts() {

        for(let i = 0; i < selectedProducts.length; i++) {
            
            let url = 'https://scandiweb-test-assignment-danilojmarins.000webhostapp.com/delete.php?SKU=' + selectedProducts[i];

            axios.get(url)
            .then(res => {
                console.log(res.data);
            })
            
        }

        setSelectedProducts([]);
        getProducts();
        window.location.reload();

    }


    // Set the selectedProducts array with the ID of each product that has been selected by the user:
    // Later, this array is passed to the deleteProducts() function.
    const handleSelect = async (e) => {

        let checkbox = document.getElementById(e.target.id);
        
        
        if(checkbox.checked === true) {
            setSelectedProducts(() => [...selectedProducts, e.target.id]);
        } else {

            let selectedArray = [];

            for(let i = 0; i < selectedProducts.length; i++) {
                if(selectedProducts[i] !== e.target.id) {
                    selectedArray.push(selectedProducts[i]);
                }
            }

            setSelectedProducts(selectedArray);
        }

        console.log(selectedProducts);

    }


    useEffect(() => {
        getProducts();
        document.title = 'Products List';
        console.log(selectedProducts);
    }, [selectedProducts])


    // Redirect to the /add-product page:
    const navigate = useNavigate();
    const routeChange = () => {
        let path = 'add-product';
        navigate(path);
    }

    return(
        <div className='main'>

            <div className='header'>
                <h1 className='main-h1'>Product List</h1>
                <div className='btns'>
                    <button className='add-btn' onClick={routeChange}>ADD</button>
                    <button id='delete-product-btn' className='delete-btn' onClick={deleteProducts}>MASS DELETE</button>
                </div>
            </div>

            <hr></hr>

            <div className='products'>

                {products.map(item => (
                    <div className='product'>
                        <input className='delete-checkbox' name='SKU' type='checkbox' id={item.SKU} onClick={handleSelect}/>
                        <label for={item.SKU} className='check-label'><p>{item.SKU}<br></br>{item.Name}<br></br>{item.Price} $<br></br>{item.Specification}</p></label>
                    </div>
                ))}
                
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

export default Main;