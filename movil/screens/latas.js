import React, { Component } from 'react';
import { Container, Header, Left, Body, Card, Button, Icon, Title, CardItem, Content, Text, Right, List, View } from 'native-base';
import { StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';

export default class Latas extends Component {
    render() {
        return (
            <Container>
                <Header hasSegment style={styles.header}>
                    <Left>
                        <Button transparent>
                            <Icon name="arrow-back"
                                onPress={() => this.props.navigation.navigate('Materiales')} />
                        </Button>
                    </Left>
                    <Body style={styles.texto}>
                        <Title>Latas</Title>
                    </Body>
                </Header>
                <View paddingBottom={20}></View>
                <Content padder>
                    <Card>
                        <CardItem header bordered>
                            <Text style={styles.texto1}>¿Por qué es importante reciclar?</Text>
                        </CardItem>
                        <CardItem bordered>
                            <Body>
                                <Text>
                                    Volviendo al uso del papel, reutilizar los folios es una práctica que,
                                    aunque en principio parezca insignificante, beneficia enormemente al planeta.
                                    Usar menos papel implica talar menos árboles para su producción.
                                </Text>
                                <View paddingBottom={20}></View>
                            </Body>
                        </CardItem>
                    </Card>
                    <View paddingBottom={20}></View>
                    <Card>
                        <CardItem header bordered>
                            <Text style={styles.texto1}>Importancia de reciclar latas</Text>
                        </CardItem>
                        <CardItem bordered>
                            <Body>
                                <List>
                                    <Text>
                                    El 100% del material puede ser reciclado.
                                    </Text>
                                </List>
                                <View paddingBottom={20}></View>
                                <List>
                                    <Text>
                                    Las latas vacías se pueden aplastar fácilmente, 
                                    ocupando muy poco volumen, por lo que son fáciles de transportar.
                                    </Text>
                                </List>
                                <View paddingBottom={20}></View>
                                <List>
                                    <Text>
                                    Reutilización indefinida
                                    </Text>
                                </List>
                                <View paddingBottom={20}></View>
                            </Body>
                        </CardItem>
                    </Card>
                    <View paddingBottom={20}></View>
                    <CardItem style={styles.botones}>
                        <Left>
                            <Body>
                                <Button small light style={styles.botones1} onPress={() => this.props.navigation.navigate('Manualidad')}>
                                    <Entypo name='circle-with-plus' size={20} style={styles.icono}></Entypo>
                                    <Text>Nuevo</Text>
                                </Button>
                            </Body>
                        </Left>
                        
                    </CardItem>
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
        left: 70
    },
    botones: {
        right: 5,
    },
    botones1: {
        width: 100,
        left: 100
    },
    botones3: {
        width: 100,
        right: 30
    },
    icono: {
        left: 10
    },
    texto1: {
        left: 35
    }
});