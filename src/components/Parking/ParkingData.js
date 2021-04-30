import React, { Component } from 'react';
import DataItemParking from './DataItemParking';
export class ParkingData extends Component {
    state = {
        editModalState: false
    }

    render() {
        if(this.props.parkingData.length === 0) {
            return (
                <tr>
                    <td  /* colspan="5"  */ className="has-text-centered">
                    Aún no hay datos
                    </td>
                </tr>
            );
        }

        return this.props.parkingData.map((parking) => (
            <DataItemParking key={ parking.id }
            parkingData={ parking } 
            deleteDataParking ={ this.props.deleteDataParking }
            toggleEditModalParking ={ this.props.toggleEditModalParking }
            showDataParking ={ this.props.showDataParking }
            />
        ));
    }
}

export default ParkingData
