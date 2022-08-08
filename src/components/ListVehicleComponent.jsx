import React, { Component } from 'react';
import VehicleService from '../services/VehicleService';

class ListVehicleComponent extends Component {
    constructor(props){
        super(props)

        this.state ={
            vehicles: []
        }
        this.addVehicle =this.addVehicle.bind(this);
        this.editVehicle = this.editVehicle.bind(this);
        this.deleteVehicle = this.deleteVehicle.bind(this);
    }
    deleteVehicle(id){
        VehicleService.deleteVehicle(id).then( res => {
            this.setState({vehicle: this.state.vehicles.filter(vehicle => vehicle.id !== id)});
        });
    }
    viewVehicle(id){
        this.props.history.push(`/view-vehicle/${id}`);
    }
    editVehicle(id){
        this.props.history.push(`/add-vehicle/${id}`);
    }
    componentDidMount(){
        VehicleService.getVehicle().then((res) =>{
        this.setState({vehicles:res.data});
        });
    }
    addVehicle(){
        this.props.history.push('/add-vehicle/_add');
    }
    render() {
        return (
            <div>
                <h2 className="text-center">Vehicle List</h2>
                <div className = "row">
                    <button className="btn btn-primary" onClick={this.addVehicle}> Add Vehicle</button>
                 </div>
                 <br></br>
                <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th>  Owner Full Name</th>
                                    <th> Vehicle License plate </th>
                                    <th> Type</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.vehicles.map(
                                        vehicle => 
                                        <tr key = {vehicle.id}>
                                             <td> {vehicle.fullName} </td>   
                                             <td> {vehicle.licenseplate}</td>
                                             <td> {vehicle.type}</td>
                                             <td>
                                                 <button onClick={ () => this.editVehicle(vehicle.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteVehicle(vehicle.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewVehicle(vehicle.id)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>

                            </table>
                            </div>
            </div>
        );
    }
}

export default ListVehicleComponent;