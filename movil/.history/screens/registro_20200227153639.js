import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Title, Content, Button, Icon, Body, Text, Card, CardItem, Item, Input, Left, Right } from 'native-base';
import { Entypo } from '@expo/vector-icons';
import myGlobals from '../globals';

const url = myGlobals.baseUrl+"/agregarUsuario";

export default class Registro extends Component {
    constructor(props) {
        super(props)
        this.state = {
          usuario: '',
          password: '',
          nombre: '',
          apellido: '',
          correo: '',
          telefono: ''
        }
    }

    enviarUsuario = () => {
        const { usuario } = this.state;
        const { password } = this.state;
        const { nombre } = this.state;
        const { apellido } = this.state;
        const { correo } = this.state;
        const { telefono } = this.state;
    
        fetch(url, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            usuario: usuario,
            password: password,
            nombre: nombre,
            apellido: apellido,
            correo: correo,
            telefono: telefono
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
                <Header style={styles.header}>
                    <Left iconLeft light>
                        <Icon name='arrow-back' 
                         onPress={() => this.props.navigation.navigate('Login')} style={styles.icon}/>
                    </Left>
                    <Body style={styles.texto}>
                        <Title>Registrate</Title>
                    </Body>
                </Header>
                <Content padder style={styles.content}>
                    <Card style={styles.card}>
                        <CardItem bordered style={styles.citem}>
                            <Body>
                                <Item style={styles.item}>
                                    <Entypo name='user' size={20}></Entypo>
                                    <Input
                                        placeholder='NickName'
                                        onChangeText={value => this.setState({ usuario: value })}  />
                                </Item>
                                <Item style={styles.item}>
                                    <Entypo name='user' size={20}></Entypo>
                                    <Input
                                        placeholder='Nombre de Usuario'
                                        onChangeText={value => this.setState({ nombre: value })}  />
                                </Item>
                                <Item style={styles.item}>
                                    <Entypo name='user' size={20}></Entypo>
                                    <Input
                                        placeholder='Apellido de Usuario'
                                        onChangeText={value => this.setState({ apellido: value })}  />
                                </Item>
                                <Item style={styles.item}>
                                    <Entypo name='mobile' size={20}></Entypo>
                                    <Input
                                        placeholder='Número de Celular' 
                                        onChangeText={value => this.setState({ telefono: value })} />
                                </Item>
                                <Item style={styles.item}>
                                    <Entypo name='email' size={20}></Entypo>
                                    <Input
                                        placeholder='Correo Electronico'
                                        onChangeText={value => this.setState({ correo: value })}  />
                                </Item>
                                <Item style={styles.item}>
                                    <Entypo name='lock' size={20}></Entypo>
                                    <Input
                                        placeholder='Contraseña'
                                        onChangeText={value => this.setState({ password: value })} />
                                </Item>
                                <Button block style={styles.button}  onPress={this.enviarUsuario}><Text> Registrarse </Text></Button>
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        marginTop: 30,
        height: 50,
        width: '100%'
    },
    texto: {
        left: 30,
    },
    content: {

    },
    card: {
        marginTop: 30,
        marginLeft: 20,
        marginRight: 20,
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
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 5,
    },
    icon: {
        backgroundColor: #
    }

});