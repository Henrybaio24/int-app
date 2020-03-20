import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Content, Card, CardItem, Right, Text, Button, Icon, Left, Body } from 'native-base';
import myGlobals from '../globals';

const url = myGlobals.baseUrl + "/getProductos";

export default class Inicio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productos: [],
        };
    }
    getProducts() {
        fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                return responseJson.datos;
            })
            .then(products => {
                this.setState({ productos: products })
            })
            .catch(error => {
                console.error(error);
            });
    }
    render() {
        this.getProducts();
        return (
            <Container>
                <Content>{
                    this.state.productos.map((product) => {
                        return <Card style={{ flex: 0 }}>

                            <CardItem>
                                <Body>
                                    <Text>Nombre</Text>
                                    <Text note>{product.nombre}</Text>
                                </Body>
                                <Body>
                                    <Text >Categoria</Text>
                                    <Text note>{product.categoria}</Text>
                                </Body>
                            </CardItem>
                            <CardItem>
                                <Body>
                                    <Image source={{ uri: product.imagen }} style={{ height: 150, width: 300, flex: 1 }} />
                                    <Text>
                                        Descripcion:
                                    </Text>
                                    <Text note>
                                        {product.descripcion}
                                    </Text>
                                </Body>
                            </CardItem>
                            <CardItem>
                                <Body>
                                    <Text>Contacto</Text>
                                    <Text note>{product.contacto}</Text>
                                </Body>
                                <Body>
                                    <Text>Precio</Text>
                                    <Text note>{product.precio}</Text>
                                </Body>
                            </CardItem>
                        </Card>
                    })
                }
                </Content>
            </Container>
        );
    }
}

