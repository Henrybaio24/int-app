import React, { Component } from 'react';
import { Container, Header, Left, Body, Card, Button, Icon, Title, CardItem, Content, Text, Right, List, View } from 'native-base';
import { StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';

export default class Papel extends Component {
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
                        <Title>Papel</Title>
                    </Body>
                </Header>
                <Content padder>
                <View paddingBottom={20}></View>
                    <Card>
                        <CardItem header bordered>
                            <Text style={styles.texto1}>¿Por qué es importante reciclar?</Text>
                        </CardItem>
                        <CardItem bordered>
                            <Body>
                                <Text>
                                    Ahorraremos una cantidad importante de recursos naturales y conservaremos,
                                    entre otras cosas, nuestros bosques, los llamados pulmones del planeta,
                                    cuyo trabajo es fundamental para descontaminar el ambiente.
                                </Text>
                                <View paddingBottom={20}></View>
                            </Body>
                        </CardItem>
                    </Card>
                    <View paddingBottom={25}></View>
                    <Card>
                        <CardItem header bordered>
                            <Text style={styles.texto1}>Importancia de reciclar papel</Text>
                        </CardItem>
                        <CardItem bordered>
                            <Body>
                                <List>
                                    <Text>
                                        Menor número de árboles serán talados para su producción.
                                    </Text>
                                </List>
                                <View paddingBottom={20}></View>
                                <List>
                                    <Text>
                                        Mejora la calidad del aire que respiramos.
                                    </Text>
                                </List>
                                <View paddingBottom={20}></View>
                                <List>
                                    <Text>
                                    Mejora la calidad del aire y el agua. 
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