import React, { Component } from 'react';
import DataItemCar from './DataItemCar';
export class CarData extends Component {
    state = {
        editModalState: false
    }

    render() {
        if(this.props.carsData.length === 0) {
            return (
                <tr>
                    <td  /* colspan="5"  */ className="has-text-centered">
                    Aún no hay datos
                    </td>
                </tr>
            );
        }

        return this.props.carsData.map((cars) => (
            <DataItemCar key={ cars.id }
            carsData={ cars } 
            deleteDataCar={ this.props.deleteDataCar }
            toggleEditModalCar={ this.props.toggleEditModalCar}
            showDataCar={ this.props.showDataCar }
            />
        ));
    }
}

export default CarData
