import React, { Component } from 'react'
import PropTypes from 'prop-types';
import InfoModal from './InfoModal';

var Modal = ({ modalState, closeModal, onChange, addData, onSubmit }) => {
    if(!modalState) {
        return null;
    }

    return (
        <div className="modal is-active">
            <div className="modal-background"></div>
            <div className="modal-card">
                <form onSubmit={ onSubmit }>
                    <header className="modal-card-head">
                        <p className="modal-card-title">Agregar Auto</p>
                    </header>
                    <section className="modal-card-body">
                        <div className="field">
                            <label className="label">Placa</label>
                            <div className="control">
                                <input className="input" type="text" name="placa" 
                                value={ addData.placa } 
                                onChange={ onChange }
                                />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Marca</label>
                            <div className="control">
                                <input className="input" type="text" name="brand"
                                value={ addData.brand }
                                onChange={ onChange }
                                />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Clase</label>
                            <div className="control">
                                <input className="input" type="text" name="class_car" 
                                value={ addData.class_car }
                                onChange={ onChange }
                                />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Color</label>
                            <div className="control">
                                <input className="input" type="text" name="colour"
                                value={ addData.colour }
                                onChange= { onChange }
                                />  
                            </div>
                        </div>
                    </section>
                    <footer className="modal-card-foot">
                        <button className="button is-success" type="submit">Guardar</button>
                    </footer>
                </form>
            </div>
            <button className="modal-close is-large" onClick={ closeModal }>x</button>
        </div>  
    );
};


export class AddDataCar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modalState: false,
            infoModalState: false,
            addData: 
                {
                    placa: ' ',
                    brand: ' ',
                    class_car: ' ',
                    colour: ' '
                }
        }

        this.toggleInfoModal = this.toggleInfoModal.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit = (e) => {
        e.preventDefault();
        
        let data = this.state.addData;
        this.props.submitDataCar(data.placa, data.brand, data.class_car, data.colour);

        this.setState({
            addData: {
                placa: ' ',
                brand: ' ',
                class_car: ' ',
                colour:' '
            }
        });

        this.toggleModal();
        this.toggleInfoModal();
    }

    toggleModal() {
        this.setState((prev, props) => {
            const newState = !prev.modalState;
            return { modalState: newState }
        });
    }

    toggleInfoModal() {
        this.setState((prev, props) => {
            const newState = !prev.infoModalState;
            return {
                infoModalState: newState
            }
        })
    }

    onChange = (e) => {
        const val = e.target.value

        this.setState({
           addData: {
               ...this.state.addData,
               [e.target.name]: val
           }
        })
    }

    render() {
        return (
            <div>
                <button style={ ButtonStyle } className="button is-dark" onClick={ this.toggleModal }> 
                    <span className="icon">
                        <i className="fa fa-plus"></i>
                    </span>
                    <label style={ LabelStyle } className="label">Agregar Auto</label>
                </button>
                <Modal modalState={ this.state.modalState }
                        closeModal={ this.toggleModal }
                        onChange={ this.onChange }
                        addData={this.state.addData}
                        onSubmit={ this.onSubmit }
                        />
                <InfoModal infoModalState={ this.state.infoModalState }
                closeModal={ this.toggleInfoModal }
                message="¡Datos agregados con éxito a la base de datos!"
                title="Datos Guardados"
                />
            </div>
        )
    }
}

const ButtonStyle = {
    marginBottom: '10px'
}

const LabelStyle = {
    color: '#fff'
}


AddDataCar.propTypes = {
    submitDataCar: PropTypes.func.isRequired
}


export default AddDataCar
