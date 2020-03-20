import React, { Component } from 'react';
import { Image, StyleSheet, KeyboardAvoidingView  } from 'react-native';
import { Container, Content, Card, CardItem, Text, Button, Icon, Left, Body, Right, Input, Item } from 'native-base';
import { Entypo } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';


export default class Agregar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            image: null
        };
    }

    _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [2, 2],
            quality: 1
        });
        console.log(result);
        if (!result.cancelled) {
            this.setState({ image: result.uri });
        }
    };

    takePicture = async () => {
        await Permissions.askAsync(Permissions.CAMERA);
        const { cancelled, uri } = await ImagePicker.launchCameraAsync({
            allowsEditing: false,
        });
        this.setState({ image: uri });
    };
    render() {
        return (
            <Container>
                <Content style={styles.container}>
                    <Card >
                    <KeyboardAvoidingView behavior="padding">
                        <CardItem>
                            <Left>
                                <Body>
                                    <Item >
                                        <Entypo name='image' size={20}></Entypo>
                                        <Input
                                            placeholder='Nombre de la Manualidad' />
                                    </Item>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem style={styles.picture}>
                            <Body>
                                <Image style={styles.image} source={{ uri: this.state.image }} />
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

                            <Body>
                                <Right>
                                    <Button small light style={styles.btn} onPress={this.takePicture}>
                                        <Entypo name='camera' size={15} style={styles.icono}></Entypo>
                                        <Text>Camara</Text>
                                    </Button>
                                </Right>
                            </Body>
                        </CardItem>



                        <CardItem style={styles.position}>
                            <Body>
                                <Item >
                                    <Entypo name='new-message' size={20}></Entypo>
                                    <Input
                                        placeholder='Descripción' />
                                </Item>
                            </Body>
                        </CardItem>
                        <CardItem style={styles.position1}>
                            <Left>
                                <Item >
                                    <Entypo name='list' size={20}></Entypo>
                                    <Input
                                        placeholder='Categoria' />
                                </Item>
                            </Left>
                            <Right>
                                <Item >
                                    <Entypo name='price-tag' size={20}></Entypo>
                                    <Input
                                        placeholder='Precio' />
                                </Item>
                            </Right>
                        </CardItem>
                        <CardItem style={styles.position2}>
                            <Body>
                                <Item >
                                    <Entypo name='location' size={20}></Entypo>
                                    <Input
                                        placeholder='Ubicación' />
                                </Item>
                            </Body>
                        </CardItem>
                        <CardItem style={styles.position3}>
                            <Body>
                                <Item >
                                    <Entypo name='mobile' size={20}></Entypo>
                                    <Input
                                        placeholder='Contacto' />
                                </Item>
                            </Body>
                        </CardItem>
                        <CardItem style={styles.botones}>
                            <Left>
                                <Body>
                                    <Button small light style={styles.botones1}>
                                        <Entypo name='edit' size={15} style={styles.icono}></Entypo>
                                        <Text>Editar</Text>
                                    </Button>
                                </Body>
                            </Left>
                            <Body>
                                <Body>
                                    <Button small light style={styles.botones2}>
                                        <Entypo name='save' size={15} style={styles.icono}></Entypo>
                                        <Text>Guardar</Text>
                                    </Button>
                                </Body>
                            </Body>
                            <Right>
                                <Body>
                                    <Button small light style={styles.botones3}>
                                        <Entypo name='cup' size={15} style={styles.icono}></Entypo>
                                        <Text>Borrar</Text>
                                    </Button>
                                </Body>
                            </Right>
                        </CardItem>
                        </KeyboardAvoidingView>
                    </Card>
                    
                </Content>
            </Container>
        );
    }
};


const styles = StyleSheet.create({
    container: {
        paddingTop: ,
    },
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