import React, { Component } from 'react';
import { Image, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { Container, Content, Card, CardItem, Text, Button, Icon, Left, Body, Right, Input, Item } from 'native-base';
import { Entypo } from '@expo/vector-icons';
import axios from 'axios';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import myGlobals from '../globals';

const url = myGlobals.baseUrl + "/agregarProducto";
export default class Agregar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nombre: "",
            descripcion: "",
            precio: "",
            categoria: "",
            contacto: "",
            imagen: "",
            idPersona: global.userId
        };
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
    enviarProducto = () => {
        const { nombre } = this.state;
        const { descripcion } = this.state;
        const { precio } = this.state;
        const { categoria } = this.state;
        const { contacto } = this.state;
        const { imagen } = this.state;
        const { idPersona } = this.state;
        fetch(url, {
            method: 'POST',
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
                "idPersona": idPersona
            })
        }).then((response) => response.json())
            .then(data => {
                console.log(data)
                alert('Se guardo correctamente')
            })
            .catch((error) => {
                console.error(error);
            })
    }
    render() {
        return (
            <Container>
                <Content >
                    <Card >
                        <KeyboardAvoidingView behavior="padding">
                            <CardItem>
                                <Left>
                                    <Body>
                                        <Item >
                                            <Entypo name='image' size={20}></Entypo>
                                            <Input
                                                placeholder='Nombre de la Manualidad'
                                                onChangeText={value => this.setState({ nombre: value })} />
                                        </Item>
                                    </Body>
                                </Left>
                            </CardItem>
                            <CardItem style={styles.picture}>
                                <Body>
                                    <Image style={styles.image} source={{ uri: this.state.imagen }} />
                                    <Image source={{ uri: 'Image URL' }} style={{ height: 200, width: 200, flex: 1 }} />
                                </Body>
                            </CardItem>
                            <CardItem style={styles.btns}>
                                <Body>
                                    <Body>
                                        <Button small light style={styles.btn} onPress={this._pickImage}>
                                            <Entypo name='picasa' size={15} style={styles.icono}></Entypo>
                                            <Text>Galeria</Text>
                                        </Button>
                                    </Body>
                                </Body>
                            </CardItem>
                            <CardItem style={styles.position}>
                                <Body>
                                    <Item >
                                        <Entypo name='new-message' size={20}></Entypo>
                                        <Input
                                            placeholder='Descripción'
                                            onChangeText={value => this.setState({ descripcion: value })} />
                                    </Item>
                                </Body>
                            </CardItem>
                            <CardItem style={styles.position1}>
                                <Left>
                                    <Item >
                                        <Entypo name='list' size={20}></Entypo>
                                        <Input
                                            placeholder='Categoria'
                                            onChangeText={value => this.setState({ categoria: value })} />
                                    </Item>
                                </Left>
                                <Right>
                                    <Item >
                                        <Entypo name='price-tag' size={20}></Entypo>
                                        <Input
                                            placeholder='Precio $'
                                            onChangeText={value => this.setState({ precio: value })} />
                                    </Item>
                                </Right>
                            </CardItem>
                            <CardItem style={styles.position3}>
                                <Body>
                                    <Item >
                                        <Entypo name='mobile' size={20}></Entypo>
                                        <Input
                                            placeholder='Contacto'
                                            onChangeText={value => this.setState({ contacto: value })} />
                                    </Item>
                                </Body>
                            </CardItem>
                            <CardItem style={styles.botones}>
                                <Body>
                                    <Body>
                                        <Button small light style={styles.botones1} onPress={() => this.props.navigation.navigate('Lista')}>
                                            <Entypo name='list' size={15} style={styles.icono}></Entypo>
                                            <Text>Lista</Text>
                                        </Button>
                                    </Body>
                                </Body>
                                <Body>
                                    <Body>
                                        <Button small light onPress={() => this.enviarProducto()} style={styles.botones2}>
                                            <Entypo name='save' size={15} style={styles.icono}></Entypo>
                                            <Text>Guardar</Text>
                                        </Button>
                                    </Body>
                                </Body>
                            </CardItem>
                        </KeyboardAvoidingView>
                    </Card>

                </Content>
            </Container>
        );
    }
};


const styles = StyleSheet.create({

    botones: {
        right: 5,
    },
    botones1: {
        right: 9
    },
    botones2: {
        right: 7
    },
    icono: {
        left: 10
    },
    image: { width: 250, height: 250, backgroundColor: 'gray', left: 35 },

    btns: {
        top: -160
    },
    position: {
        top: -130
    },
    position1: {
        top: -110
    },
    position2: {
        top: -90
    },
    position3: {
        top: -70
    },
    botones: {
        top: -50
    }

})