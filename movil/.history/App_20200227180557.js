import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { createSwitchNavigator, createAppContainer, createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import LoginScreen from './screens/login';
import RegistroScreen from './screens/registro'
import Inicio from './screens/inicio';
import Manualidad from './screens/agregar';
import Materiales from './screens/materiales';
import Mapa from './screens/mapa';
import PlasticoScreen from './screens/plastico';
import LatasScreen from './screens/latas';
import PapelScreen from './screens/papel';
import CartonScreen from './screens/carton';
import Recicladoras from './screens/recicladora';
import Lista from './screens/lista';
import { Icon } from 'native-base';


export default class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }
  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }
    return <AppContainer />

  }

}

const InicioTabNavigator = createBottomTabNavigator({
  Inicio,
  Materiales,
  Manualidad,
  Recicladoras,
  Lista
}, {
  navigationOptions: ({ navigation }) => {
    const { routeName } = navigation.state.routes[navigation.state.index];
    return {
      headerTitle: routeName,
    }
  }
});

const InicioStackNavigator = createStackNavigator({
  InicioTabNavigator: InicioTabNavigator
}, {
  defaultNavigationOptions: ({ navigation }) => {
    return {
      headerRight: (
        <Icon name='log-out'
          style={{ paddingRight: 20 }}
          onPress={() => {
            global.userId = "";
            navigation.navigate('Login');
          }
          } />
      ),

    }
  }
});

const AppSwitchNavigator = createSwitchNavigator({
  Login: {
    screen: LoginScreen,
  },
  Registro: {
    screen: RegistroScreen,
  },
  Inicio: {
    screen: InicioStackNavigator
  },
  Plastico: {
    screen: PlasticoScreen
  },
  Latas: {
    screen: LatasScreen
  },
  Papel: {
    screen: PapelScreen
  },
  Carton: {
    screen: CartonScreen
  }

});

const AppContainer = createAppContainer(AppSwitchNavigator);

