import React, { Component } from 'react';

export class DataItemParking extends Component {
    state = {
        editModalState: false
    }
    
    clickDelete(id) {
        this.props.deleteDataParking(id);
    }

    clickEditParking(id, placa, fech_input, fec_output, time, amount ) {
        this.props.toggleEditModalParking(id,  placa, fech_input, fec_output, time, amount );
    }

    render() {

        const {id,  placa, fech_input, fec_output, time, amount }  = this.props.parkingData;
            
        return (
            <tr>
                <td className="has-text-centered">{ placa }</td>
                <td className="has-text-centered">{ fech_input }</td>
                <td className="has-text-centered">{ fec_output }</td>
                <td className="has-text-centered">{ fec_output }</td>
                <td className="has-text-centered">{ amount }</td>

                <td className="has-text-centered">
                    <button className="button is-primary" 
                    onClick={ (e) => this.clickEditParking(id, placa, fech_input, fec_output, time, amount) }
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

export default DataItemParking
