import React, { Component } from 'react';
import VehicleService from '../services/VehicleService';

class CreateVehicleComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            ownerName:'',
            noplate:'',
            type:''
        }
        this.changeOwnerNameHandler = this.changeOwnerNameHandler.bind(this);
        this.changeNoPlateHandler = this.changeNoPlateHandler.bind(this);
        this.saveOrUpdateVehicle = this.saveOrUpdateVehicle.bind(this);
    }
    componentDidMount(){

       
        if(this.state.id === '_add'){
            return
        }else{
            VehicleService.getVehicleById(this.state.id).then( (res) =>{
                let vehicle = res.data;
                this.setState({ownerName: vehicle.ownerName,
                   noplate: vehicle.noplate,
                    type : vehicle.type
                });
            });
        }        
    }
    saveOrUpdateVehicle = (e) => {
        e.preventDefault();
        let vehicle = {ownerName: this.state.ownerName, noplate: this.state.noplate, type: this.state.type};
        console.log('vehicle => ' + JSON.stringify(vehicle));

       
        if(this.state.id === '_add'){
          VehicleService.createVehicle(vehicle).then(res =>{
                this.props.history.push('/vehicle');
            });
        }else{
            VehicleService.updateVehicle(vehicle, this.state.id).then( res => {
                this.props.history.push('/vehicle');
            });
        }
    }
    changeOwnerNameHandler= (event) => {
        this.setState({ownerName: event.target.value});
    }
    changeNoPlateHandler= (event) => {
        this.setState({noplate: event.target.value});
    }

    changeTypeHandler= (event) => {
        this.setState({type: event.target.value});
    }
    cancel(){
        this.props.history.push('/vehicle');
    }
    render() {
        return (
            <div>
               <div className='container'>
                 <div className='row'>
                    <div className='card col-md-6 offset-md-3 offset-md-3'>
                    {
                                    this.getTitle()
                                }
                     <div className = "card-body">
                        <form>
                        <div className = "form-group">
                                            <label> Owner Name: </label>
                                            <input placeholder="Owner Name" name="ownerName" className="form-control" 
                                                value={this.state.ownerName} onChange={this.changeOwnerNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Vehicle license plate No: </label>
                                            <input placeholder="Vehicle license plate No" name="noplate" className="form-control" 
                                                value={this.state.noplate} onChange={this.changeNoPlateHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Vehicle Type: </label>
                                            <input placeholder="Vehicle Type" name="type" className="form-control" 
                                                value={this.state.type} onChange={this.changeTypeHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateVehicle}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                        </form>
                     </div>
                    </div>

                 </div>
                </div> 
            </div>
        );
    }
}

export default CreateVehicleComponent;