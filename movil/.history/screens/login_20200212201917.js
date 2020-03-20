import React, { Component } from "react";
import { StyleSheet } from 'react-native';
import { Container, Header, Title, Content, Button, Left, Body, Text, Card, CardItem, Item, Subtitle, Input, Right } from "native-base";
import { Entypo } from '@expo/vector-icons';

export default class Login extends Component {
    render() {
        return (
            <Container >
                <Header style={styles.header}>
                    <Body style={styles.texto}>
                        <Title>Inicio de Sesión</Title>
                    </Body>
                </Header>
                <Content padder>
                    <Card style={styles.card}>
                        <CardItem bordered style={styles.citem}>
                            <Body>
                                <Item style={styles.item}>
                                    <Entypo name='user' size={20}></Entypo>
                                    <Input
                                        placeholder='Correo Electronico' />
                                </Item>
                                <Item style={styles.item}>
                                    <Entypo name='lock' size={20}></Entypo>
                                    <Input
                                        placeholder='Contraseña' />
                                </Item>
                                <Button block style={styles.button} onPress={() => this.props.navigation.navigate('Inicio')}>
                                    <Text> Ingresar </Text>
                                </Button>
                                <Button block info style={styles.button} onPress={() => this.props.navigation.navigate('Registro')}>
                                    <Text> Registrate </Text>
                                </Button>
                            </Body>
                        </CardItem>
                    </Card>
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
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 5,

    },

});