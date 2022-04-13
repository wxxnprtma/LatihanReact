import React, {Component} from "react";
import Main from "./Main";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

class App extends Component {
    render() {
        return (
            <div>
                <Nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Bank">Bank</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/BMI">BMI</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Harga">Harga</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Biner">Biner</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Decimal">Decimal</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Hexadecimal">Hexadecimal</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Octal">Octal</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Nav>
                <Main />
            </div>
        );
    }
}

export default App;