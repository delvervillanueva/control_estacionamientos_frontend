import React, { Component } from 'react';

export class DataItemCar extends Component {
    state = {
        editModalState: false
    }
    
    clickDelete(id) {
        this.props.deleteDataCar(id);
    }

    clickEditCar(id, placa, brand, class_car, colour) {
        this.props.toggleEditModalCar(id,  placa, brand, class_car, colour);
    }

    render() {

        const {id,  placa, brand, class_car, colour }  = this.props.carsData;
            
        return (
            <tr>
                <td className="has-text-centered">{ placa }</td>
                <td className="has-text-centered">{ brand }</td>
                <td className="has-text-centered">{ class_car }</td>
                <td className="has-text-centered">{ colour }</td>
                <td className="has-text-centered">
                    <button className="button is-primary" 
                    onClick={ (e) => this.clickEditCar(id, placa, brand, class_car, colour) }
                    >
                        <span className="icon">
                            <i className="fa fa-pencil"></i>
                        </span>
                    </button>
                    {` `}
                    <button className="button is-danger" onClick={ (e) => this.clickDelete(id) }>
                        <span className="icon">
                            <i className="fa fa-trash"></i>
                        </span>
                    </button>
                </td>
               
            </tr>
        )
    }
}

export default DataItemCar
