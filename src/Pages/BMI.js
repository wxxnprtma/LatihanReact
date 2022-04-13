import React, { Component } from 'react';
import Alert from "../Components/Alert"

class BMI extends Component {
    constructor() {
        super();
        this.state = {
            weight: 0,
            height: 0,
            bmi: 0,
            bmiStatus: ""
        }
    }

    Hitung = () => {
        let weight = this.state.weight;
        let height = this.state.height;
        let bmi = weight / (height * height);
        let bmiStatus = "";
        if (bmi < 18.5) {
            bmiStatus = "Underweight";
        }
        else if (bmi >= 18.5 && bmi <= 24.9) {
            bmiStatus = "Normal";
        }
        else if (bmi >= 25 && bmi <= 29.9) {
            bmiStatus = "Overweight";
        }
        else if (bmi >= 30) {
            bmiStatus = "Obese";
        }
        this.setState({
            bmi,
            bmiStatus
        });
    }

    changeWeight = (event) => {
        this.setState({
            weight: event.target.value
        });
    }
    changeHeight = (event) => {
        this.setState({
            height: event.target.value
        });
    }

    // Alert
    Alert = () => {
        if (this.state.bmiStatus === "") {
            return <div></div>;
        }
        if (this.state.bmiStatus === "Underweight") {
            return <Alert type="danger" header="Underweight">
                <p>Kekurangan Berat Badan</p>
            </Alert>

        }
        if (this.state.bmiStatus === "Normal") {
            return <Alert type="success" header="Normal">
                <p>Normal</p>
            </Alert>
        }
        if (this.state.bmiStatus === "Overweight") {
            return <Alert type="warning" header="Overweight">
                <p>Kelebihan Berat Badan</p>
            </Alert>
        }
        if (this.state.bmiStatus === "Obese") {
            return <Alert type="danger" header="Obese">
                <p>Obesitas</p>
            </Alert>
        }
    }
  
    render() {
        return (
            <div className="container col-md-6">
                <div className="card">
                    <div className="card-header bg-secondary text-center text-white">
                        <h3>Body Mass Index</h3>
                    </div>
                    <div className="card-body">
                        <div className="form-group">
                            <label>Berat(Kg)</label>
                            <input type="number" className="form-control" onChange={this.changeWeight} />
                        </div>
                        <div className="form-group">
                            <label>Tinggi(meter)</label>
                            <input type="number" className="form-control" onChange={this.changeHeight} />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-info form-control mb-2" onClick={this.Hitung}>Hitung</button>
                        </div>
                        {/* bmi status with alert bootstrap */}
                        {this.Alert()}
                    </div>
                </div>
            </div>
        );
    }
}

export default BMI;