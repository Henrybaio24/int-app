import React, { Component } from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import { CardItem, Left, Body, Right, Input, Item, Button, Text } from 'native-base';
import { Entypo } from '@expo/vector-icons';

export default class Mapa extends Component {
    render() {
        return (
            <View style={styles.container}>
                <CardItem style={styles.botones}>
                    <Left>
                        <Body>
                            <Button small light style={styles.botones1} onPress={() => this.props.navigation.navigate('Agregar')}>
                                <Entypo name='cup' size={20} style={styles.icono}></Entypo>
                                <Text>Borrar</Text>
                            </Button>
                        </Body>
                    </Left>
                    <Body>
                        <Body>
                            <Button small light style={styles.botones2} onPress={() => this.props.navigation.navigate('Agregar')}>
                                <Entypo name='save' size={20} style={styles.icono}></Entypo>
                                <Text>Guardar</Text>
                            </Button>
                        </Body>
                    </Body>
                    <Right>
                        <Body>
                            <Button small light style={styles.botones3} onPress={() => this.props.navigation.navigate('Mapa')}>
                                <Entypo name='edit' size={20} style={styles.icono}></Entypo>
                                <Text>Editar</Text>
                            </Button>
                        </Body>
                    </Right>
                </CardItem>
                <CardItem >
                    <Body>
                        <Item style={styles.item} >
                            <Entypo name='globe' size={20}></Entypo>
                            <Input
                                placeholder='Nombre de la Recicladora' />
                        </Item>
                    </Body>
                </CardItem>
                <CardItem style={styles.item2} >
                    <Body>
                        <Item style={styles.item}>
                            <Entypo name='new-message' size={20}></Entypo>
                            <Input
                                placeholder='Descripción' />
                        </Item>
                    </Body>
                </CardItem>
                <CardItem>
                    <Body>
                        <Item style={styles.item}>
                            <Entypo name='location' size={20}></Entypo>
                            <Input
                                placeholder='Ubicación' />
                        </Item>
                    </Body>
                </CardItem>
                <CardItem >
                    <Body>
                        <Item style={styles.item}>
                            <Entypo name='mobile' size={20}></Entypo>
                            <Input
                                placeholder='Contacto' />
                        </Item>
                    </Body>
                </CardItem>
                <MapView style={styles.mapStyle} />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

    },
    mapStyle: {
        width: 340,
        height: 250
    },
    texto: {
        left: 65
    },
    botones: {
        right: 5,
        marginTop: 15
    },
    botones1: {
        width: 100,
        right: 3
    },
    botones2: {
        width: 110,
        right: 5
    },
    botones3: {
        width: 100,
        left: 3
    },
    icono: {
        left: 10
    }
});