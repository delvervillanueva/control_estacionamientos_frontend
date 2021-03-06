import React, { Component } from 'react';

export class EditModal extends Component {

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
                                <label className="label">Primer Nombre</label>
                                <input className="input" type="text" name="firstname" defaultValue={ this.props.data.firstname } 
                                onChange={this.props.onChange } />
                            </div>
                            <div className="field">
                                <label className="label">Apellidos</label>
                                <input className="input" type="text" name="lastname" defaultValue={ this.props.data.lastname }
                                onChange={this.props.onChange } />
                            </div>
                            <div className="field">
                                <label className="label">Correo</label>
                                <input className="input" type="text" name="email" defaultValue={ this.props.data.email }
                                onChange={this.props.onChange } />
                            </div>
                            <div className="field">
                                <label className="label">Nro Celular</label>
                                <input className="input" type="text" name="celular" defaultValue={ this.props.data.celular }
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


export default EditModal
