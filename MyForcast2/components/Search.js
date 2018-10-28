import React from 'react'
import{StyleSheet, TextInput, Image, Button,View,Keyboard} from 'react-native'
import Style from '../Style'
import {createStackNavigator} from 'react-navigation';
import List from './List'

class Search extends React.Component {
    static navigationOptions={
      title:"Search a City",        
    }
    constructor (props){
        super(props)
        this.state = {
          city : ''
        }
    }
    setCity(city){
        this.setState({city: city})
    }
    submit(){
        Keyboard.dismiss()
        if(!this.state.city == '')
        {
            this.props.navigation.navigate('Result',{city:this.state.city})
        }else{
            return (
                alert("Please enter the name of a City")
            )
        }
            
    }
    render() {
        return (
            <View>
                <Image source={require('./icons/icon.png')} style={{margin:100,width:200 ,height:200}}/>
                <View style={Style.container}>
                    <TextInput
                        underlineColorAndroid='transparent'
                        onChangeText={(text) => this.setCity(text)}
                        onSubmitEditing = {() => this.submit()}
                        style={Style.input}
                        placeholder= 'Write a city Ex: Madrid'
                    />  
                    <Button color={Style.color} onPress = {()=> this.submit()} title="Find Forcast" />
                </View>   
            </View>
        );
      }
}

const navigationOptions = {
    headerStyle: Style.header,
    headerTitleStyle:Style.headerTitle,
}

export default createStackNavigator({
    Search:{
        screen:Search,
        navigationOptions
    },
    Result:{
        screen:List,
        navigationOptions
    }
})