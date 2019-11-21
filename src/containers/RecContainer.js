import React, { Component } from 'react';
import Recommendation from '../components/Recommendation'

export default class RecContainer extends Component {

    

    render() {
        console.log(this.props)
        return (
            <div>
                <Recommendation />
            </div>
        )
    }
}
