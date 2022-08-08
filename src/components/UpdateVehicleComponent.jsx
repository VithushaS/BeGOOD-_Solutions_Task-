import React, { Component } from 'react';

class UpdateVehicleComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            ownerName: '',
            noplate: '',
            type: ''
        }
        this.changeOwnerNameHandler = this.changeOwnerNameHandler.bind(this);
        this.changeNoPlateHandler = this.changeNoPlateHandler.bind(this);
        this.updateVehicle = this.updateVehicle.bind(this);
    }

    componentDidMount(){
        VehicleService.getVehicleById(this.state.id).then( (res) =>{
            let vehicle = res.data;
            this.setState({ownerName: vehicle.ownerName,
                noplate: vehicle.noplate,
                type : vehicle.type
            });
        });
    }

    updateVehicle = (e) => {
        e.preventDefault();
        let vehicle = {ownerName: this.state.ownerName, noplate: this.state.noplate, type: this.state.type};
        console.log('vehicle => ' + JSON.stringify(vehicle));
        console.log('id => ' + JSON.stringify(this.state.id));
        VehicleService.updateVehicle(vehicle, this.state.id).then( res => {
            this.props.history.push('/vehicle');
        });
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
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Vehicle</h3>
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

                                        <button className="btn btn-success" onClick={this.updateVehicle}>Save</button>
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

export default UpdateVehicleComponent;