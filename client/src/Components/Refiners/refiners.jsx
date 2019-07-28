import React, { Component } from 'react';
import Select from 'react-select'
import '../../Styling/refiners.css';

class FilterBar extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className='Filter-wrapper'>
                <div className='Filter-bar'>
                    <Select></Select>
                </div>
            </div>
        )
    };
}

export default FilterBar;