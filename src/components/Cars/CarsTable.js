import React, { Component } from 'react'
 import CarData from '../Cars/CarData';
import EditModalCar from './EditModalCar';
import Axios from 'axios';
import qs from 'qs'; 

class CarsTable extends Component {
    state = {
        editModalState: false,
        data: {
            id: '',
            placa: '',
            brand: '',
            class_car: '',
            colour: ''
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        
        const params = this.state.data;
        Axios.post('http://localhost/control_estacionamientos/backend/api/edit-car', qs.stringify(params))
        .then(resp => {
            this.props.updateTableAfterUpdateCar();
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

    toggleEditModalCar = (id, placa, brand, class_car, colour) => {
        this.setEditModalState();
        this.setState({
            data: {
                id: id,
                placa: placa,
                brand: brand,
                class_car: class_car,
                colour: colour
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
                            <th className="has-text-centered">Marca</th>
                            <th className="has-text-centered">Clase</th>
                            <th className="has-text-centered">Color</th>
                            <th className="has-text-centered"></th>
                        </tr>
                    </thead>
                    <tbody>
                    <CarData carsData={ this.props.carsData }
                    deleteDataCar={ this.props.deleteDataCar }
                    toggleEditModalCar={ this.toggleEditModalCar }
                        />
                    </tbody>
                </table>


                <EditModalCar editModalState={ this.state.editModalState }
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

export default CarsTable
