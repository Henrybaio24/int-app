import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Title, Content, Button, Icon, Body, Text, Card, CardItem, Item, Input, Left, Right } from 'native-base';
import { Entypo } from '@expo/vector-icons';



export default class Registro extends Component {


    
    render() {
        return (
            <Container>
                <Header style={styles.header}>
                    <Left iconLeft light>
                        <Icon name='arrow-back' 
                         onPress={() => this.props.navigation.navigate('Login')}/>
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
                                        placeholder='Nombre de Usuario' />
                                </Item>
                                <Item style={styles.item}>
                                    <Entypo name='mobile' size={20}></Entypo>
                                    <Input
                                        placeholder='Número de Celular' />
                                </Item>
                                <Item style={styles.item}>
                                    <Entypo name='home' size={20}></Entypo>
                                    <Input
                                        placeholder='Dirección' />
                                </Item>
                                <Item style={styles.item}>
                                    <Entypo name='email' size={20}></Entypo>
                                    <Input
                                        placeholder='Correo Electronico' />
                                </Item>
                                <Item style={styles.item}>
                                    <Entypo name='lock' size={20}></Entypo>
                                    <Input
                                        placeholder='Contraseña' />
                                </Item>
                                <Button block style={styles.button} onPress={() => this.props.navigation.navigate('Login')}><Text> Registrarse </Text></Button>
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
        marginTop: 60,
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

});