import React, { Component } from 'react'
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Header from "../component/header";

export default class Crear extends Component {

    constructor() {
        super();
        this.state = {
            nombre: '',
            contacto: '',
            direccion: '',
            descripcion: '',
            id: ''
        }

    }

    submit() {
        if (this.state.nombre === "" || this.state.contacto === "" || this.state.direccion === "" || this.state.descripcion === "") {
            alert("Todos los campos son requeridos")
        } else {
            let url = "http://localhost:5000/agregarRecicladora";
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
                <Header/>
                <div class="row ">
                    <div class="col-lg-2  ">
                    </div>
                    <div class="col-lg-8">
                        <div class="card card-signin my-5">
                            <div class="card-body">
                                <h5 class="card-title text-center">Crear Recicladora</h5>
                                <ValidatorForm class="form-signin">

                                    <div class="form-group row">
                                        <label for="colFormLabelLg" class="col-sm-2 col-form-label ">Recicladora</label>
                                        <div class="col-sm-10">
                                            <TextValidator class="form-control form-control-lg" placeholder="Nombre de la Recicladora"
                                                name="nombre"
                                                value={this.state.nombre}
                                                onChange={(data) => {
                                                    this.setState({ nombre: data.target.value })
                                                }}
                                                validators={["required"]}
                                                errorMessages={["El campo es requerido"]}
                                            />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="colFormLabelLg" class="col-sm-2 col-form-label ">Contactos </label>
                                        <div class="col-sm-10">
                                            <TextValidator class="form-control form-control-lg" placeholder="Numeros de contacto"
                                                name="contacto"
                                                value={this.state.contacto}
                                                onChange={(data) => {
                                                    this.setState({ contacto: data.target.value })
                                                }}
                                                validators={["required"]}
                                                errorMessages={["El campo es requerido"]}
                                            />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="colFormLabelLg" class="col-sm-2 col-form-label ">Direccion</label>
                                        <div class="col-sm-10">
                                            <TextValidator class="form-control form-control-lg" placeholder="Nombre de la Recicladora"
                                                name="direccion"
                                                value={this.state.direccion}
                                                onChange={(data) => {
                                                    this.setState({ direccion: data.target.value })
                                                }}
                                                validators={["required"]}
                                                errorMessages={["El campo es requerido"]}
                                            />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="colFormLabelLg" class="col-sm-2 col-form-label ">Descripcion</label>
                                        <div class="col-sm-10">
                                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                                                name="descripcion"
                                                value={this.state.descripcion}
                                                onChange={(data) => {
                                                    this.setState({ descripcion: data.target.value })
                                                }}
                                            ></textarea>
                                        </div>
                                    </div>

                                    <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit"
                                        onClick={() => { this.submit() }}
                                    >Crear</button>
                                    <hr class="my-4" />

                                </ValidatorForm>
                                <hr class="my-4" />
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
