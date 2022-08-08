import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import ListVehicleComponent from './components/ListVehicleComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateVehicleComponent from './components/CreateVehicleComponent';
import UpdateVehicleComponent from './components/UpdateVehicleComponent';

function App() {
  return (
    <div>
        <Router>
          
          <HeaderComponent/>
          <div className='container'>
          <Switch> 
              <Route path = "/"  exact component = {ListVehicleComponent}></Route>
              <Route path = "/vehicle" component = {ListVehicleComponent}></Route>
              <Route path = "/add-vehicle" component = {CreateVehicleComponent}></Route>
              {/*<Route path = "/update-vehicle/:id" component = {UpdateVehicleComponent}></Route>*/}
              </Switch>
          
          </div>
          <FooterComponent/>
          
        </Router>
    </div>

    
  );
}

export default App;
