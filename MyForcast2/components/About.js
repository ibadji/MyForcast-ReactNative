import React from 'react'
import{StyleSheet, Text, View,Image, Button} from 'react-native'
import Style from '../Style'

export default class About extends React.Component {
    search(){
        this.props.navigation.navigate('Search')
    }
    render() {
        return (
          <View style ={Style.container}>
            <Text style={[Style.title,{marginBottom:50}]}>A propo de L'application</Text>
            <Text style={{margin:50}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dui augue, elementum ut sapien ut, porttitor lobortis risus. Nunc tincidunt sit amet orci et vulputate. Maecenas nulla risus, ullamcorper sit amet massa eget, molestie elementum purus. Vivamus in scelerisque magna, ut condimentum nibh. Mauris porta arcu eu purus feugiat, nec scelerisque felis elementum. Ut a ipsum aliquet, aliquet eros in, accumsan ligula. Morbi nec leo ex. 
            </Text>
            <Button color={Style.color} onPress = {()=> this.search()} title="Search a city" />
          </View>
        );
      }
   
}
