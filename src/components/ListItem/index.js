import React, { Component } from 'react';
import { render } from '@testing-library/react';

class ListItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            active: false
        }
    }


    toggleActive = function () {
        console.log('hover')
    }

    render() {
        return 'hello'
    }
}