
import React, {Component} from 'react';
import {Platform, Image,StyleSheet, Text, View,StatusBar} from 'react-native';
import Search from './components/Search';
import About from './components/About';
import {createBottomTabNavigator } from 'react-navigation';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const Tabs = createBottomTabNavigator ({
  Search: {screen:Search,
    navigationOptions: {
      tabBarIcon:()=>  
      <Image source={require('./components/icons/home.png')} style={{width:25 ,height:25}}/>
  },
  },
  About: {screen:About,
    navigationOptions: {
      tabBarIcon:()=>  
      <Image source={require('./components/icons/user.png')} style={{width:25 ,height:25}}/>
  },
  }
}, {
  tabBarPosition:'bottom',
  tabBarOptions :{
    activeBackgroundColor: '#474b52',
    showIcon: true,
    showLabel: false,
    pressColor:"#474b52",
    indicatorStyle:{
      height:2,
      
    },
    style:{
      backgroundColor:"#a2273c",
      borderTopWidth:1,
      borderColor:"#3f101c"
    }
  }

})
export default class App extends React.Component{
  render() {
    return (
      <View style={{flex: 1}}> 
        <StatusBar hidden={true}/>
        <Tabs /> 
      </View> 
     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
