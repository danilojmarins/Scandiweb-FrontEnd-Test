import React from 'react';

class TypeSwitcher extends React.Component {
    constructor(props) {
        super(props);
        this.state = {type: 'Select'};

        this.handleChange = this.handleChange.bind(this);
        
    }

    handleChange(e) {
        this.setState({ type: e.target.value });
    }

    render({changeProductData, Specification}) {
        if(this.state.type === 'Select') {
            return(
                <div className='item'>
                        <label className='label' for='type'>Type Switcher</label>
                        <select id='type' name='Type Switcher' onChange={this.handleChange}>
                            <option value='Select'>Select</option>
                            <option value='DVD'>DVD</option>
                            <option value='Book'>Book</option>
                            <option value='Furniture'>Furniture</option>
                        </select>
                </div>
            )
        } else if (this.state.type === 'DVD') {
            return(
                <div>
                    <div className='item'>
                            <label className='label' for='type'>Type Switcher</label>
                            <select id='type' name='Type Switcher' onChange={this.handleChange}>
                                <option value='Select'>Select</option>
                                <option value='DVD'>DVD</option>
                                <option value='Book'>Book</option>
                                <option value='Furniture'>Furniture</option>
                            </select>
                    </div>

                    <div className='item'>
                        <label className='label'>Size (MB)</label>
                        <input type='text' id='size' name='Specification' value={Specification} onChange={changeProductData}></input>
                    </div>
                </div>
            )
        } else if (this.state.type === 'Book') {
            return(
                <div>
                    <div className='item'>
                                <label className='label' for='type'>Type Switcher</label>
                                <select id='type' name='Type Switcher' onChange={this.handleChange}>
                                    <option value='Select'>Select</option>
                                    <option value='DVD'>DVD</option>
                                    <option value='Book'>Book</option>
                                    <option value='Furniture'>Furniture</option>
                                </select>
                    </div>

                    <div className='item'>
                        <label className='label'>Weight (KG)</label>
                        <input type='text' id='weight'></input>
                    </div>
                </div>
            )
        } else if (this.state.type === 'Furniture') {
            return(
                <div>
                    <div className='item'>
                                <label className='label' for='type'>Type Switcher</label>
                                <select id='type' name='Type Switcher' onChange={this.handleChange}>
                                    <option value='Select'>Select</option>
                                    <option value='DVD'>DVD</option>
                                    <option value='Book'>Book</option>
                                    <option value='Furniture'>Furniture</option>
                                </select>
                    </div>

                    <div className='item'>
                        <label className='label'>Height (CM)</label>
                        <input type='text' id='height'></input>
                    </div>
        
                    <div className='item'>
                        <label className='label'>Width (CM)</label>
                        <input type='text' id='width'></input>
                    </div>
        
                    <div className='item'>
                        <label className='label'>Length (CM)</label>
                        <input type='text' id='length'></input>
                    </div>
                </div>
            )
        }
    }
}

export default TypeSwitcher;