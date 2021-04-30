import React, { Component } from 'react';

export class EditModalCar extends Component {

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
                                <label className="label">Marca</label>
                                <input className="input" type="text" name="brand" defaultValue={ this.props.data.brand }
                                onChange={this.props.onChange } />
                            </div>
                            <div className="field">
                                <label className="label">Clase</label>
                                <input className="input" type="text" name="class_car" defaultValue={ this.props.data.class_car }
                                onChange={this.props.onChange } />
                            </div>
                            <div className="field">
                                <label className="label">Color</label>
                                <input className="input" type="text" name="colour" defaultValue={ this.props.data.colour }
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


export default EditModalCar
