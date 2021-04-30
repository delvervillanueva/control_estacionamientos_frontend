import React, { Component } from 'react';
import { Link } from 'react-router-dom';


var LoggedInNav = ({clicklogout, navActive, toggleNav, clickNavLink}) => {
    return (
        <nav className="navbar is-link is-fixed-top" role="navigation" aria-label="main navigation">
            <div className="container">
                <div className="navbar-brand">
                    <a className="navbar-item" href="/">
                        <b>PLAYA DE ESTACIONAMIENTOS</b>
                    </a>
                    <a href="#nav" role="button" className={`navbar-burger burger ${ navActive }`} 
                    aria-label="menu" 
                    aria-expanded="false"
                    onClick={ toggleNav }
                    >
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div className={`navbar-menu ${ navActive }`}>
                    <div className="navbar-start">
                        <Link to="/" className="navbar-item" onClick={ clickNavLink }>Clientes</Link>
                        <Link to="/autos" className="navbar-item" onClick={ clickNavLink }>Autos</Link>
                        <Link to="/estacionamiento" className="navbar-item" onClick={ clickNavLink }>Estacionamiento</Link>
                    </div>
                </div>

              

                <div className={`navbar-menu ${ navActive }`}>
                    <div className="navbar-end">
                        <a href="#logout" role="button" className="navbar-item" onClick={ clicklogout }>Cerrar Sesión</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

var NotLoggedInNav = ({ navActive, toggleNav, clickNavLink }) => {
    return (
        <nav className="navbar is-link is-fixed-top" role="navigation" aria-label="main navigation">
            <div className="container">
                <div className="navbar-brand">
                    <a className="navbar-item" href="/">
                        <b>PLAYA DE ESTACIONAMIENTOS</b>
                    </a>
                    <a href="#nav" role="button" className={`navbar-burger burger ${ navActive }`} 
                    aria-label="menu" 
                    aria-expanded="false"
                    onClick={ toggleNav }
                    >
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>

                    </a>
                </div>
                <div className={`navbar-menu ${ navActive }`}>
                    <div className="navbar-start">
                        <Link to="/" className="navbar-item" onClick={ clickNavLink }>Clientes</Link>
                        <Link to="/autos" className="navbar-item" onClick={ clickNavLink }>Autos</Link>
                        <Link to="/estacionamiento" className="navbar-item" onClick={ clickNavLink }>Estacionamientos</Link>
                    </div>
                </div>

                <div className={`navbar-menu ${ navActive }`}>
                    <div className="navbar-end">
                      
                        <Link to="/login" className="navbar-item" onClick={ clickNavLink }>Iniciar sesión</Link>
                        <Link to="/registration" className="navbar-item" onClick={ clickNavLink }>Registrarse</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export class Header extends Component {
    state = {
        navActive: ''
    }

    toggleNav = (e) => {
        this.setState((prev, props) => {
            if(prev.navActive === '') {
                return { navActive: 'is-active' }
            } else {
                return { navActive: '' }
            }
        })
    }

    clickNavLink = (e) => {
        this.setState({
            navActive: ''
        })
    }

    render() {
        return this.props.logged_in ? 
        (
            <LoggedInNav clicklogout={ this.props.clicklogout }
            navActive={ this.state.navActive }
            toggleNav={ this.toggleNav }
            clickNavLink={ this.clickNavLink }
            />
        )
        :
        (
            <NotLoggedInNav
            navActive={ this.state.navActive }
            toggleNav={ this.toggleNav }
            clickNavLink={ this.clickNavLink }
            />
        )
    }
}

export default Header
