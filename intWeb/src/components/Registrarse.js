import React, { Component } from 'react';
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Link } from 'react-router-dom'


export default class Registrarse extends Component {

    constructor() {
        super();
        this.state = {
            admin: '',
            password: '',
        }

    }

    submit() {
        if (this.state.admin === "" || this.state.password === "") {
            alert("Todos los campos son necesarios")
        } else {
            let url = "http://localhost:5000/loginAdmin";
            let data = this.state;
            fetch(url, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(data)
            }).then((result) => {
                result.json().then((resp) => {
                    console.log("resp", resp);
                })
            })
        }

    }

    render() {

        return (
            <div class="container">
                <div class="row ">
                    <div class="col-lg-2  ">
                    </div>
                    <div class="col-lg-8">
                        <div class="card card-signin my-5">
                            <div class="card-body">
                                <h5 class="card-title text-center">Registrarse</h5>
                                <ValidatorForm class="form-signin" >

                                    <div class="form-group">
                                        <TextValidator type="text" class="form-control"
                                            placeholder="Usuario"
                                            name="admin"
                                            value={this.state.admin}
                                            onChange={(data) => {
                                                this.setState({ admin: data.target.value })
                                            }}
                                            validators={["required"]}
                                            errorMessages={["El campo es requerido"]}
                                        />
                                    </div>
                                    <hr class="my-4" />
                                    <div class="form-group">
                                        <TextValidator type="password" class="form-control"
                                            placeholder="Password"
                                            name="password"
                                            value={this.state.password}
                                            onChange={(data) => {
                                                this.setState({ password: data.target.value })
                                            }}
                                            securetextentry="true"
                                            validators={["required"]}
                                            errorMessages={["El campo es requerido"]}
                                        />
                                    </div>
                                    <hr class="my-4" />
                                    <Link to ="/">
                                    <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit"
                                        onClick={() => { this.submit() }}>Guardar
                                    </button>
                                    <hr class="my-4" />
                                    </Link>

                                </ValidatorForm>
                                
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