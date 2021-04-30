import React, { Component } from 'react'
 import ParkingData from './ParkingData';
import EditModalParking from './EditModalParking';
import Axios from 'axios';
import qs from 'qs'; 

class ParkingTable extends Component {
    state = {
        editModalState: false,
        data: {
            id: '',
            placa: ' ',
            fech_input: ' ',
            fec_output: ' ',
            time: ' ',
            amount: ' '
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        
        const params = this.state.data;
        Axios.post('http://localhost/control_estacionamientos/backend/api/edit-parking', qs.stringify(params))
        .then(resp => {
            this.props.updateTableAfterUpdateParking();
            this.setEditModalState();
        });
    }

    onChange = (e) => {
        const val = e.target.value;
        this.setState({
            data: {
                ...this.state.data,
                [e.target.name]: val
            }
        });
    }

    toggleEditModalParking = (id, placa, fech_input, fec_output, time, amount) => {
        this.setEditModalState();
        this.setState({
            data: {
                id: id,
                placa: placa,
                fech_input: fech_input,
                fec_output: fec_output,
                time: time,
                amount: amount
            }
        })
    }

    closeModal = (e) => {
        this.setEditModalState();
    }

    setEditModalState() {
        this.setState((prev, props) => {
            const newState = !prev.editModalState;
            return { editModalState: newState }
        })
    }

    render() {
        return (
            <section style={ TableStyle }>
                <table className="table is-bordered is-striped">
                    <thead>
                        <tr>
                            <th className="has-text-centered">Nro. Placa</th>
                            <th className="has-text-centered">Fec Endrada</th>
                            <th className="has-text-centered">Fec Salida</th>
                            <th className="has-text-centered">Tiempo</th>
                            <th className="has-text-centered">Monto</th>
                            <th className="has-text-centered"></th>
                        </tr>
                    </thead>
                    <tbody>
                    <ParkingData parkingData={ this.props.parkingData }
                    deleteDataParking={ this.props.deleteDataParking }
                    toggleEditModalParking={ this.toggleEditModalParking }
                        />
                    </tbody>
                </table>


                <EditModalParking editModalState={ this.state.editModalState }
                closeModal={ this.closeModal } 
                data={ this.state.data }
                onChange={ this.onChange }
                onSubmit={ this.onSubmit }
                />
               
            </section>
        )
    }
}

const TableStyle = {
    overflow: 'auto',
    minWidth: '100px'
}

export default ParkingTable
