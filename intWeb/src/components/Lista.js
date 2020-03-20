import React, { Component } from 'react'
import axios from 'axios';
import Header from "../component/header";

const API = "http://localhost:5000/getRecicladoras";


export default class Crear extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recicladoras: []

        }
    }

    componentDidMount() {
        axios.get(API)
            .then(response => {
                this.setState({ recicladoras: response.data.datos })
            })
            .catch(error => {
                console.log(error)
            })
    }

    deleteRecicladora(id) {

        fetch(`http://localhost:5000/eliminarRecicladora/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                window.location.assign("http://localhost:3000/lista");
            });

    }

    editRecicladora(id) {
        fetch(`http://localhost:5000/editarRecicladora/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.setState({
                    nombre: data.nombre,
                    contacto: data.contacto,
                    direccion: data.direccion,
                    descripcion: data.descripcion,
                    id: data.id
                });
            });
    }


    render() {
        const { recicladoras } = this.state
        return (
            <div class="container">
                <Header/>
                <div class="card card-signin my-5">
                    <table class="table table-borderless">
                        <thead>
                            <tr class="card-title text-center ">
                                <th>Nombre</th>
                                <th>Contacto</th>
                                <th>Direccion</th>
                                <th>Descripcion</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody class="card-title text-center text-uppercase">
                            {recicladoras.map(element =>
                                <tr key={element.id}>
                                    <td>{element.nombre}</td>
                                    <td>{element.contacto}</td>
                                    <td>{element.direccion}</td>
                                    <td>{element.descripcion}</td>
                                    <td>
                                        <button onClick={() => this.deleteRecicladora(element.id)} className="btn btn-primary darken-4">
                                            Eliminar
                                    </button>
                                        <button onClick={() => this.editRecicladora(element.id)} className="btn btn-success darken-4" style={{ margin: '4px' }}>
                                            Actualizar
                                    </button>
                                    </td>
                                </tr>

                            )}

                        </tbody>
                    </table>
                </div>
            </div>

        )
    }
}