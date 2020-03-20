import React, { Component } from 'react';
import { Image, StyleSheet, Modal } from 'react-native';
import { Container, Content, Card, CardItem, Right, Text, Button, Icon, Left, Body, Input, Item } from 'native-base';
import { Entypo } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import myGlobals from '../globals';
const url = myGlobals.baseUrl + "/getProductos/";

export default class Lista extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            idProducto: "",
            nombre: "",
            descripcion: "",
            precio: "",
            categoria: "",
            contacto: "",
            imagen: "",
            productos: [],
        };
    }
    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }
    getFileExtension(filename) {
        var ext = /^.+\.([^.]+)$/.exec(filename);
        return ext == null ? "" : ext[1];
    }
    _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            base64: true,
            allowsEditing: true,
            aspect: [2, 2],
            quality: 1
        });
        if (!result.cancelled) {
            var extensionFile = this.getFileExtension(result.uri);
            var finalImage = "data:image/" + extensionFile + ";base64," + result.base64;
            this.setState({ imagen: finalImage });
        }
    };
    getProductos() {

        fetch(url + global.userId)
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
    editData(position) {
        this.setState({
            nombre: this.state.productos[position].nombre,
            descripcion: this.state.productos[position].descripcion,
            precio: this.state.productos[position].precio,
            categoria: this.state.productos[position].categoria,
            contacto: this.state.productos[position].contacto,
            imagen: this.state.productos[position].imagen,
            idProducto: this.state.productos[position].id
        })
    }
    actualizarProducto = () => {
        const { nombre } = this.state;
        const { descripcion } = this.state;
        const { precio } = this.state;
        const { categoria } = this.state;
        const { contacto } = this.state;
        const { imagen } = this.state;
        const { idProducto } = this.state;
        fetch(myGlobals.baseUrl + "/actualizarProducto", {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "nombre": nombre,
                "descripcion": descripcion,
                "precio": precio,
                "categoria": categoria,
                "contacto": contacto,
                "imagen": imagen,
                "idProducto": idProducto
            })
        }).then((response) => response.json())
            .then(data => {
                console.log(data)
                alert('Se actualizó correctamente')
                this.setState({
                    nombre: "",
                    descripcion: "",
                    precio: "",
                    categoria: "",
                    contacto: "",
                    imagen: "",
                    idProducto: "",
                    modalVisible: false
                })
            })
            .catch((error) => {
                console.error(error);
            })
    }
    eliminarProducto(id) {
        fetch(myGlobals.baseUrl + "/eliminar/" + id, {
            method: 'delete',
        }).then((response) => response.json())
            .then(data => {
                console.log(data)
                alert('Se elimino correctamente')
            })
            .catch((error) => {
                console.error(error);
            })
    }

    render() {
        this.getProductos();
        return (
            <Container>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}>
                    <Content>
                        <Card>
                            <CardItem>
                                <Body>
                                    <Text>Editar</Text>
                                </Body>
                                <Body>
                                    <Button small light style={styles.botones2} onPress={() => {
                                        this.setModalVisible(!this.state.modalVisible);
                                    }}>
                                        <Entypo name='cross' size={15} style={styles.icono}></Entypo>
                                        <Text>Cancelar</Text>
                                    </Button>
                                </Body>
                            </CardItem>
                            <CardItem>
                                <Left>
                                    <Body>
                                        <Text>Nombre de la manualidad</Text>
                                        <Item >
                                            <Entypo name='image' size={20}></Entypo>
                                            <Input
                                                defaultValue={this.state.nombre}
                                                onChangeText={value => this.setState({ nombre: value })} />
                                        </Item>
                                    </Body>
                                </Left>
                            </CardItem>
                            <CardItem style={styles.image}>
                                <Body>
                                    <Image style={styles.image} source={{ uri: this.state.imagen }} />
                                </Body>
                            </CardItem>
                            <CardItem>
                                <Body>
                                    <Button small light style={styles.botones2} onPress={this._pickImage}>
                                        <Entypo name='picasa' size={15} style={styles.icono}></Entypo>
                                        <Text>Galeria</Text>
                                    </Button>
                                </Body>
                            </CardItem>
                            <CardItem style={styles.position}>
                                <Body>
                                    <Text>Descripción</Text>
                                    <Item >
                                        <Entypo name='new-message' size={20}></Entypo>
                                        <Input
                                            defaultValue={this.state.descripcion}
                                            onChangeText={value => this.setState({ descripcion: value })} />
                                    </Item>
                                </Body>
                            </CardItem>
                            <CardItem style={styles.position1}>
                                <Body>
                                    <Text>Categoria</Text>
                                    <Item >
                                        <Entypo name='list' size={20}></Entypo>
                                        <Input
                                            defaultValue={this.state.categoria}
                                            onChangeText={value => this.setState({ categoria: value })} />
                                    </Item>
                                </Body>
                                <Body>
                                    <Text>Precio</Text>
                                    <Item >
                                        <Entypo name='price-tag' size={20}></Entypo>
                                        <Input
                                            defaultValue={this.state.precio}
                                            onChangeText={value => this.setState({ precio: value })} />
                                    </Item>
                                </Body>
                            </CardItem>
                            <CardItem style={styles.position3}>
                                <Body>
                                    <Text>Contacto</Text>
                                    <Item >
                                        <Entypo name='mobile' size={20}></Entypo>
                                        <Input
                                            defaultValue={this.state.contacto}
                                            onChangeText={value => this.setState({ contacto: value })} />
                                    </Item>
                                </Body>
                            </CardItem>
                            <CardItem style={styles.botones}>
                                <Body>
                                    <Body>
                                        <Button small light onPress={() => this.actualizarProducto()} style={styles.botones2}>
                                            <Entypo name='save' size={15} style={styles.icono}></Entypo>
                                            <Text>Guardar</Text>
                                        </Button>
                                    </Body>
                                </Body>
                            </CardItem>
                        </Card>
                    </Content>
                </Modal>


                <Content>{
                    this.state.productos.map((producto, index) => {
                        return <Card style={{ flex: 0 }}>
                            <CardItem>
                                <Left>
                                    <Body>
                                        <Text>Nombre Producto</Text>
                                        <Text note style={styles.list}>{producto.nombre}</Text>
                                    </Body>
                                    <Body>
                                        <Text>Categoria</Text>
                                        <Text note>{producto.categoria}</Text>
                                    </Body>
                                </Left>
                            </CardItem>
                            <CardItem>
                                <Body>
                                    <Image source={{ uri: producto.imagen }} style={{ height: 150, width: 325, flex: 1 }} />
                                    <Text style={styles.descripcion}>Descripción</Text>
                                    <Text note style={styles.descripcion}>{producto.descripcion}</Text>
                                </Body>
                            </CardItem>
                            <CardItem>
                                <Body>
                                    <Input>Contacto</Input>
                                    <Input note>{producto.contacto}</Input>
                                </Body>
                                <Body>
                                    <Text>Precio</Text>
                                    <Input note>{producto.precio}</Input>
                                </Body>
                            </CardItem>
                            <CardItem style={styles.botones}>
                                <Body>
                                    <Body>
                                        <Button small light style={styles.botones1} onPress={() => {
                                            this.editData(index);
                                            this.state.modalVisible = true;
                                        }}>
                                            <Entypo name='edit' size={15} style={styles.icono}></Entypo>
                                            <Text>Editar</Text>
                                        </Button>
                                    </Body>
                                </Body>
                                <Body>
                                    <Body>
                                        <Button small light style={styles.botones2} onPress={() => {
                                            this.eliminarProducto(producto.id)
                                        }}>
                                            <Entypo name='cup' size={15} style={styles.icono}></Entypo>
                                            <Text>Eliminar</Text>
                                        </Button>
                                    </Body>
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



const styles = StyleSheet.create({

    botones: {
        right: 5,
    },
    botones1: {
        right: 9
    },
    botones2: {
        left: 7
    },
    icono: {
        left: 10
    },
    image: { width: 250, height: 250, backgroundColor: 'gray', left: 35 },
    descripcion: {
        marginTop: 15,
        left: 10
    }


})