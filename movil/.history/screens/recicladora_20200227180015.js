
import React, { Component } from 'react';
import { Image, StyleSheet, KeyboardAvoidingView, FlatList } from 'react-native';
import { Container, Content, Card, CardItem, Text, Button, Item, Input, Left, Body, Right, Title } from 'native-base';
import myGlobals from '../globals';
const url = myGlobals.baseUrl + "/getRecicladoras";
import { Entypo } from '@expo/vector-icons';


export default class Detalle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recicladoras: [],
    };
  }
  getRecicladoras() {
    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson.datos;
      })
      .then(reciclers => {
        this.setState({ recicladoras: reciclers })
      })
      .catch(error => {
        console.error(error);
      });
  }
  render() {
    this.getRecicladoras();
    return (
      <Container style={styles.container}>
        <Content>
          {
            this.state.recicladoras.map((recicladora) => {
              return <Card>
                <CardItem style={styles.card}>
                  <Body>
                    <Text >Nombre:</Text>
                    <Text note style={styles.titulo}>
                      {recicladora.nombre}
                    </Text>
                  </Body>
                </CardItem>
                <CardItem style={styles.card}>
                  <Body>
                    <Text >Direccion:</Text>
                    <Text note style={styles.titulo}>
                      {recicladora.direccion}
                    </Text>
                  </Body>
                  <Body>
                    <Text >Contacto:</Text>
                    <Text note style={styles.titulo}>
                      {recicladora.contacto}
                    </Text>
                  </Body>
                </CardItem>
                <CardItem style={styles.card}>
                  <Body>
                    <Text>Descripción</Text>
                    <Text note >
                      {recicladora.descripcion}
                    </Text>
                  </Body>
                </CardItem>
              </Card>
            })
          }
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({

  botones: {
    paddingTop: 55,
    paddingBottom: 72
  },
  botones2: {
    right: 7,
  },
  container: {
    paddingTop: 11,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 45,
  },
  card: {
    paddingTop: 25,
  },
  titulo: {
    paddingBottom: 1,
    fontSize: 15,
    textTransform: 'uppercase'

  },
  pelicula: {
    backgroundColor: '#FFFF',
    width: 290,
    height: 160,
    marginLeft: 25,
  },
  titulo: {
    marginTop: 10,
    left: 5

  }

})