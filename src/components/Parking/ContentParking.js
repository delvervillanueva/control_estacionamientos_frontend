import React, { Component } from 'react';
import AddDataParking from './AddDataParking';
import ParkingTable from './ParkingTable';
 import PropTypes from 'prop-types' ;
import { Redirect } from 'react-router-dom';

export class ContentParking extends Component {

    render() {
        if(this.props.logged_in) {
            return <Redirect to="/autos" />
        }
       
        return (
            <section className="section">
                <AddDataParking submitDataParking={ this.props.submitDataParking } />
                <ParkingTable Table  parkingData={ this.props.parkingData }
                deleteDataParking={ this.props.deleteDataParking }
                updateTableAfterUpdateParking={ this.props.updateTableAfterUpdateParking }
                 />
                
            </section>
            )
    }
}

ContentParking.propTypes = {
    submitDataParking: PropTypes.func.isRequired
}

export default ContentParking
