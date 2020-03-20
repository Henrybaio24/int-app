import React, { Component } from "react";
import { StyleSheet, KeyboardAvoidingView } from 'react-native';
import { AsyncStorage } from 'react-native';
import { Container, Header, Title, Content, Button, Left, Body, Text, Card, CardItem, Item, Subtitle, Input, Right } from "native-base";
import { Entypo } from '@expo/vector-icons';
import axios from 'axios';
import myGlobals from '../globals';

const url = myGlobals.baseUrl + "/login";

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            usuario: '',
            password: '',
            loading: false
        }
    }

    onChangeHandle(state, value) {
        this.setState({
            [state]: value
        })
    }
    ingresar() {
        const { usuario, password } = this.state;
        if (usuario && password) {
            const req = {
                "usuario": usuario,
                "password": password
            }
            this.setState({
                loading: true
            })
            axios.post(url, req)
                .then(
                    res => {
                        this.setState({
                            loading: false
                        })
                        global.userId = res.data.datos[0].id;
                        this.props.navigation.navigate('Inicio')
                        alert('Ingreso correcto')
                    },
                    err => {
                        this.setState({
                            loading: false
                        })
                        alert("Usuario password son incorrectos")
                    }
                )

        } else {
            alert("Enter usuario and password");

        }

    }

    render() {
        const { usuario, password, loading } = this.state;
        return (
            <Container >
                <Header style={styles.header}>
                    <Body style={styles.texto}>
                        <Title>Inicio de Sesión</Title>
                    </Body>
                </Header>
                <Content padder>
                    <KeyboardAvoidingView behavior="padding">
                        <Card style={styles.card}>

                            <CardItem bordered style={styles.citem}>
                                <Body>
                                    <Item style={styles.item}>
                                        <Entypo name='user' size={20}></Entypo>
                                        <Input
                                            placeholder='Nombre de usuario'
                                            value={usuario}
                                            onChangeText={(value) => this.onChangeHandle('usuario', value)}
                                        />
                                    </Item>
                                    <Item style={styles.item}>
                                        <Entypo name='lock' size={20}></Entypo>
                                        <Input
                                            placeholder='Contraseña'
                                            value={password}
                                            onChangeText={(value) => this.onChangeHandle('password', value)}
                                            secureTextEntry={true} />
                                    </Item>
                                    <Button block style={styles.button}
                                        onPress={() => this.ingresar()}
                                        disabled={loading}>
                                        <Text>
                                            {loading ? "Loading..." : "Ingresar"}
                                        </Text>
                                    </Button>
                                    <Button block info style={styles.button} onPress={() => this.props.navigation.navigate('Registro')}>
                                        <Text> Registrate </Text>
                                    </Button>
                                </Body>
                            </CardItem>

                        </Card>
                    </KeyboardAvoidingView>
                </Content>
            </Container>
        );
    }
};




const styles = StyleSheet.create({
    header: {
        marginTop: 30,
        height: '25%',
        width: '100%'
    },
    texto: {
        position: 'absolute'
    },
    card: {
        marginLeft: 30,
        marginRight: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    item: {
        marginTop: 5,
        marginLeft: 10,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 16,
    },
    button: {
        marginTop: 13,
        marginBottom: 10,
    },
    citem: {
        paddingTop: 5,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 5,

    },

});