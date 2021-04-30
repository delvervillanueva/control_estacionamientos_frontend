import React, { Component } from 'react';

export class EditModalParking extends Component {

    render() {

        if(!this.props.editModalState) {
            return null;
        }

        return (
            <div className="modal is-active">
                <div className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">Modificar Datos</p>
                    </header>
                    <form onSubmit={ this.props.onSubmit }>
                        <section className="modal-card-body">
                            <div className="field">
                                <label className="label">Nro. Placa</label>
                                <input className="input" type="text" name="placa" defaultValue={ this.props.data.placa } 
                                onChange={this.props.onChange } />
                            </div>
                            <div className="field">
                                <label className="label">Fecha Entrada</label>
                                <input className="input" type="date" name="fech_input" defaultValue={ this.props.data.fech_input }
                                onChange={this.props.onChange } />
                            </div>
                            <div className="field">
                                <label className="label">Fecha Salida</label>
                                <input className="input" type="date" name="fec_output" defaultValue={ this.props.data.fec_output }
                                onChange={this.props.onChange } />
                            </div>
                            <div className="field">
                                <label className="label">Tiempo</label>
                                <input className="input" type="text" name="time" defaultValue={ this.props.data.time }
                                onChange={this.props.onChange } />
                            </div>
                            <div className="field">
                                <label className="label">Monto</label>
                                <input className="input" type="text" name="amount" defaultValue={ this.props.data.amount }
                                onChange={this.props.onChange } />
                            </div>
                        </section>
                        <footer className="modal-card-foot">
                            <input type="hidden" name="id" value={ this.props.data.id }
                            onChange={this.props.onChange } />
                            <button type="submit" className="button is-primary">Modificar</button>
                        </footer>
                    </form>
                </div>
                <button className="modal-close is-large" onClick={ this.props.closeModal }>x</button>
            </div> 
        )
    }
}


export default EditModalParking
