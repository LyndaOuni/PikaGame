import { AppRegistry } from 'react-native';
import LoginScreen from './src/components/LoginScreen';
import { StackNavigator } from 'react-navigation';
import LevelOneScreen from './src/components/LevelOneScreen';
const AppNavigator = StackNavigator({
  LoginScreen: { screen: LoginScreen,  navigationOptions: { header: null }},
  LevelOneScreen: { screen: LevelOneScreen,  navigationOptions: { header: null }},
});

AppRegistry.registerComponent('gamePika', () => AppNavigator);


