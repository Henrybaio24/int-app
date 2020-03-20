import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

const url = "http://localhost:5000/admin";

export default class Login extends Component {

    constructor() {
        super();
        this.state = {
            admin: '',
            password: ''
        }
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    ingresoLogin = e => {
        e.preventDefault()
        if (this.state.admin === "" || this.state.password === "") {
            alert("Complete todos los datos para continuar...");
        } else {
            axios.post(url, this.state)
                .then(response => {
                    if (response.data.mensaje2 === "Haz iniciado sesion") {
                        window.location.assign("http://localhost:3000/crear");
                    }
                })
                .catch(error => {
                    alert("Datos Incorrectos")
                })
        }
    }

    render() {
        const { admin, password } = this.state
        return (
            <div class="container">
                <div class="row ">
                    <div class="col-lg-2  ">
                    </div>
                    <div class="col-lg-8">
                        <div class="card card-signin my-5">
                            <div class="card-body">
                                <h5 class="card-title text-center">Iniciar Sesion</h5>
                                <ValidatorForm class="form-signin" onSubmit={this.ingresoLogin} >

                                    <div class="form-group">
                                        <TextValidator type="text" class="form-control"
                                            placeholder="Usuario"
                                            name="admin"
                                            value={admin}
                                            onChange={this.changeHandler}
                                            validators={["required"]}
                                            errorMessages={["El campo es requerido"]}
                                        />
                                    </div>
                                    <hr class="my-4" />
                                    <div class="form-group">
                                        <TextValidator type="password" class="form-control"
                                            placeholder="Password"
                                            name="password"
                                            value={password}
                                            onChange={this.changeHandler}
                                            securetextentry="true"
                                            validators={["required"]}
                                            errorMessages={["El campo es requerido"]}
                                        />

                                    </div>
                                    <hr class="my-4" />
                                    <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit"
                                    >Ingresar</button>
                                    <hr class="my-4" />
                                </ValidatorForm>
                                <Link to="/registrarse">
                                    <button class="btn btn-lg btn-info btn-block text-uppercase" type="submit">
                                        Registrarse
                                        </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-2">
                    </div>
                </div>

            </div>

        )
    }

}