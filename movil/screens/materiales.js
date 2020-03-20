import React, { Component } from 'react';
import { Container, Text } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Image, StyleSheet } from 'react-native';

export default class Materiales extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Grid>
          <Col style={{ height: 250, backgroundColor: '#F0EBEB' }} onPress={() => this.props.navigation.navigate('Plastico')}>
            <Image
              style={styles.plastico}
              source={require('../assets/imagenes/plastico2.jpg')}
            />
            <Text style={styles.texto}>Plástico</Text>
          </Col>
          <Col style={{ height: 250, backgroundColor: '#FCE6E6'  }} onPress={() => this.props.navigation.navigate('Latas')}>
            <Image
              style={styles.latas}
              source={require('../assets/imagenes/latas2.jpg')}
            />
            <Text style={styles.texto2}>Latas</Text>
          </Col>
        </Grid>
        <Grid>
          <Col style={{ height: 250, backgroundColor: '#FCE6E6' }} onPress={() => this.props.navigation.navigate('Papel')}>
            <Image
              style={styles.papel}
              source={require('../assets/imagenes/papel2.jpg')}
            />
            <Text style={styles.texto3}>Papel</Text>
          </Col>
          <Col style={{ height: 250, backgroundColor: '#F0EBEB'  }} onPress={() => this.props.navigation.navigate('Carton')}>
            <Image
              style={styles.carton}
              source={require('../assets/imagenes/carton2.jpg')}
            />
            <Text style={styles.texto4}>Cartón</Text>
          </Col>
        </Grid>
      </Container>
    );
  }
}


const styles = StyleSheet.create({
  container:{
    paddingTop: 40,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 40,
  },
  plastico: {
    width: 130,
    height: 130,
    marginTop: 30,
    marginLeft: 15,
    
  },
  latas: {
    width: 130,
    height: 130,
    marginTop: 30,
    marginLeft: 15
  },
  papel: {
    width: 130,
    height: 130,
    marginTop: 30,
    marginLeft: 15
  },
  carton: {
    width: 130,
    height: 130,
    marginTop: 30,
    marginLeft: 15
  }, 
  texto: {
    marginTop: 40,
    marginLeft: 45,
    fontSize: 20,

  },
  texto2: {
    marginTop: 40,
    marginLeft: 55,
    fontSize: 20,

  },
  texto3: {
    marginTop: 40,
    marginLeft: 55,
    fontSize: 20,

  },
  texto4: {
    marginTop: 40,
    marginLeft: 50,
    fontSize: 20,

  }
});
