import React,{Component} from 'react';
/* import './App.css';
 */ 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './components/layout/Header';
import Content from './components/layout/Content';
import ContentCars from './components/Cars/ContentCars';
import ContentParking from './components/Parking/ContentParking';

import Footer from './components/layout/Footer'
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration'
import Cars from './components/Cars/Cars';
import Parking from './components/Parking/Parking';


/* import Home from './components/Home/Home'; */

import Axios from 'axios';
import qs from 'qs';

class App extends Component {
  state = {
    usersData: [],
    logged_in: false,
    token_isValid: false
  }

  stateCar = {
    carsData: [],
    logged_in: false,
    token_isValid: false
  }

  stateParking = {
    parkingData: [],
    logged_in: false,
    token_isValid: false
  }

  componentDidMount() {
    this.showData();
    this.showDataCar();
    this.showDataParking();
    this.LoggedIn();
  }

  LoggedIn() {
    var token = localStorage.getItem('token');
    this.checkToken(token);
  }

  checkToken = (token) => {
    const params = {
      token: token
    }

    Axios.post('http://localhost/control_estacionamientos/backend/api/check-token', qs.stringify(params))
    .then(resp => {
      if(resp.data.valid === true) {
        this.setState({
          token_isValid: !this.state.token_isValid,
          logged_in: !this.state.logged_in
        })
      }
    });
  }



  submitLogin = (username, password) => {
    const params = {
      username: username,
      password: password
      
    }
    
    
    Axios.post('http://localhost/control_estacionamientos/backend/api/login-user', qs.stringify(params))
    .then(resp => {
        if(resp.data.logged_in === true && resp.data.token !== '') {
          localStorage.setItem('token', resp.data.token);
          this.setState({
            token_isValid: !this.state.token_isValid,
            logged_in: !this.state.logged_in
          });
        }
    } );
  }

  showData() {
    Axios.get('http://localhost/control_estacionamientos/backend/api/get-user')
    .then(resp => this.setState({ usersData: resp.data }));
  }

  showDataCar() {
    Axios.get('http://localhost/control_estacionamientos/backend/api/get-car')
    .then(resp => this.setState({ carsData: resp.data }));
  }


  showDataParking() {
    Axios.get('http://localhost/control_estacionamientos/backend/api/get-parking')
    .then(resp => this.setState({ parkingData: resp.data }));
  }





  updateTableAfterUpdate = (e) => {
    this.showData();
  }

  updateTableAfterUpdateParking = (e) => {
    this.showDataParking();
  }

  clicklogout = (e) => {
    localStorage.clear();
    this.setState({
      logged_in: !this.state.logged_in,
      token_isValid: !this.state.token_isValid
    })
  }


  submitData = (firstname, celular, lastname, email) => {
    const params = {
      firstname   : firstname,
      celular  : celular,
      lastname    : lastname,
      email       : email
    }

    Axios.post('http://localhost/control_estacionamientos/backend/api/add-user', qs.stringify(params))
    .then(resp => {
      this.showData();
    })
  }


  submitDataCar = (placa, brand, class_car, colour) => {
    const params = {
      placa   : placa,
      brand  : brand,
      class_car    : class_car,
      colour       : colour
    }

    Axios.post('http://localhost/control_estacionamientos/backend/api/add-car', qs.stringify(params))
    .then(resp => {
      this.showDataCar();
    })
  }


  submitDataParking = (placa, fech_input, fec_output, time, amount ) => {
    const params = {
      placa   : placa,
      fech_input    : fech_input,
      fec_output  : fec_output,
      time       : time,
      amount       : amount

    }

    Axios.post('http://localhost/control_estacionamientos/backend/api/add-parking', qs.stringify(params))
    .then(resp => {
      this.showDataParking();
    })
  }



  deleteData = (id) => {
    const that = this;

    const params = {
      id: id
    }

    Axios.post('http://localhost/control_estacionamientos/backend/api/delete-user', qs.stringify(params))
    .then(resp => {
      that.showData();
    })
    .catch(error => console.log(error));
  }



  deleteDataCar = (id) => {
    const that = this;

    const params = {
      id: id
    }

    Axios.post('http://localhost/control_estacionamientos/backend/api/delete-car', qs.stringify(params))
    .then(resp => {
      that.showDataCar();
    })
    .catch(error => console.log(error));
  }

  

  deleteDataParking = (id) => {
    const that = this;

    const params = {
      id: id
    }

    Axios.post('http://localhost/control_estacionamientos/backend/api/delete-parking', qs.stringify(params))
    .then(resp => {
      that.showDataParking();
    })
    .catch(error => console.log(error));
  }


    render() {
      return (
        <div>
          <Router>
          <Header logged_in={ this.state.logged_in }
          clicklogout={ this.clicklogout } />
            <div style={ ContentStyle }>
              <Switch>
                <Route exact path="/" render={ props => (
                  <React.Fragment>
                    <Content
                      submitData={ this.submitData }
                      usersData={ this.state.usersData }
                      deleteData={ this.deleteData }
                      updateTableAfterUpdate={ this.updateTableAfterUpdate }
                      logged_in={ this.state.logged_in }
                    />
                  </React.Fragment>
                ) } />

                <Route exact path="/autos" render={ props => (
                 
                    <ContentCars
                    submitDataCar={ this.submitDataCar }
                    carsData={ this.state.carsData }
                    deleteDataCar={ this.deleteDataCar }
                    updateTableAfterUpdateCar={ this.updateTableAfterUpdateCar }
                    />
                 
                ) } />


                  <Route exact path="/estacionamiento" render={ props => (
                 
                 <ContentParking
                     submitDataParking={ this.submitDataParking }
                    parkingData={ this.state.parkingData }
                    deleteDataParking={ this.deleteDataParking }
                    updateTableAfterUpdateParking={ this.updateTableAfterUpdateParking }
                 />
              
             ) } />


                <Route path="/login" component={ () => 
                  <Login submitLogin={ this.submitLogin }
                  logged_in={ this.state.logged_in } /> 
                } />
                <Route path="/registration" component={ () =>
                  <Registration logged_in={ this.state.logged_in } />
                } />
                <Route path="/autos" component={ () =>
                  <Cars logged_in={ this.state.logged_in } />
                } />
                <Route path="/estacionamiento" component={ () =>
                  <Parking logged_in={ this.state.logged_in } />
                } />
              </Switch>
            </div>
          <Footer />
        </Router>
      </div>
      )
    }
  }

  const ContentStyle = {
    paddingTop: '40px'
  }

export default App;
