import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import Main from '../pages/Main.js';
import AddProduct from '../pages/AddProduct.js';

export default function RoutesPath() {
    return (
        <HashRouter>
            <Routes>
                <Route exact path='/' element={<Main/>}/>
                <Route exact path='/add-product' element={<AddProduct/>}/>
            </Routes>
        </HashRouter>
    )
}