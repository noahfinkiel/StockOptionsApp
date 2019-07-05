import React, { Component } from 'react';
import FilterBar from './Refiners/refiners';
import Report from './Report/report';


class MasterComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div>
            <div>
                <FilterBar/>
                <Report/>
            </div>
        </div>
        )
    }
}

export default MasterComponent;