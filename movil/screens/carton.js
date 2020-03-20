import React, { Component } from 'react';
import { Container, Header, Left, Body, Card, Button, Icon, Title, CardItem, Content, Text, Right, View, List } from 'native-base';
import { StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';

export default class Carton extends Component {
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
                        <Title>Cartón</Title>
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
                                    Reciclar en casa  ayuda a la creación
                                    y al mantenimiento de puestos de trabajo. Porque el proceso de reciclaje de residuos
                                    necesita de empresas y personas trabajadoras que recojan los distintos materiales y los clasifiquen.
                                </Text>
                                <View paddingBottom={20}></View>
                            </Body>
                        </CardItem>
                    </Card>
                    <View paddingBottom={20}></View>
                    <Card>
                        <CardItem header bordered>
                            <Text style={styles.texto1}>Importancia de reciclar cartón</Text>
                        </CardItem>
                        <CardItem bordered>
                            <Body>
                                <List>
                                    <Text>
                                    Ahorra 140 litros de petróleo.
                                    </Text>
                                </List>
                                <View paddingBottom={20}></View>
                                <List>
                                    <Text>
                                    Ahorra 50.000 litros de agua.
                                    </Text>
                                </List>
                                <View paddingBottom={20}></View>
                                <List>
                                    <Text>
                                    El reciclaje de cartón genera empleo.
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
        left: 65
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