import React, { Component } from 'react'
import VehicleService from '../services/VehicleService'

class ViewVehicleComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
           vehicle: {}
        }
    }

    componentDidMount(){
        VehicleService.getVehicleById(this.state.id).then( res => {
            this.setState({vehicle: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Vehicle Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Owner Name: </label>
                            <div> { this.state.vehicle.ownerName }</div>
                        </div>
                        <div className = "row">
                            <label> Vehicle license plate No: </label>
                            <div> { this.state.vehicle.noplate }</div>
                        </div>
                        <div className = "row">
                            <label>  Vehicle Type: </label>
                            <div> { this.state.vehicle.type }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewVehicleComponent
