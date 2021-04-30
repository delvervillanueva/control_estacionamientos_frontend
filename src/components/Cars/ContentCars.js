import React, { Component } from 'react';
import AddDataCar from './AddDataCar';
import CarsTable from './CarsTable';
 import PropTypes from 'prop-types' ;
import { Redirect } from 'react-router-dom';

export class ContentCars extends Component {

    render() {
        if(this.props.logged_in) {
            return <Redirect to="/autos" />
        }
       
        return (
            <section className="section">
                <AddDataCar submitDataCar={ this.props.submitDataCar } />
                <CarsTable  carsData={ this.props.carsData }
                deleteDataCar={ this.props.deleteDataCar }
                updateTableAfterUpdateCar={ this.props.updateTableAfterUpdateCar }
                 />
                
            </section>
            )
    }
}

ContentCars.propTypes = {
    submitDataCar: PropTypes.func.isRequired
}

export default ContentCars
