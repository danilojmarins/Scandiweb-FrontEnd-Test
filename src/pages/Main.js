import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Styles/Main.scss';



const Main = () => {

    const [products, setProducts] = useState([]);
    const [loadingProducts, setLoadingProducts] = useState(false);
    const [selectedProducts, setSelectedProducts] = useState([]);

    async function getProducts() {

        setLoadingProducts(true);

            let url = "http://localhost/Scandiweb-Backend-Test/get.php";
            await fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setProducts(data);
            })
            .catch(function(error){
                console.error("Error in getting the products: " + error.message);
            })

        setLoadingProducts(false);

    }


    async function deleteProducts() {

        for(let i = 0; i < selectedProducts.length; i++) {
            
            let url = 'http://localhost/Scandiweb-Backend-Test/delete.php?SKU=' + selectedProducts[i];

            axios.get(url)
            .then(res => {
                console.log(res.data);
            })
            
        }

        setSelectedProducts([]);
        getProducts();
        window.location.reload();

    }


    const handleSelect = async (e) => {

        let checkbox = document.getElementById(e.target.id);
        //console.log(event.target.id);
        
        
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


    /*
    function uncheckBoxes() {

        let checkboxes = document.getElementsByClassName("delete-checkbox");
        
        checkboxes.forEach(function(checkbox) {
            checkbox.checked = false;
        })

    }
    */


    useEffect(() => {
        getProducts();
        document.title = 'Products List';
        console.log(selectedProducts);
    }, [selectedProducts])

    const navigate = useNavigate();
    const routeChange = () => {
        let path = 'add-product';
        navigate(path);
    }

    return(
        <div className='main'>

            <div className='header'>
                <h1>Product List</h1>
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
                        <label for={item.SKU} className='check-label'><p><br></br>{item.SKU}<br></br>{item.Name}<br></br>{item.Price} $<br></br>{item.Specification}</p></label>
                    </div>
                ))}
                
            </div>

            <hr className='footerHR'></hr>

            <div className='footer'>
                <p>Scandiweb Test Assignment</p>
            </div>

        </div>
    )

}

export default Main;