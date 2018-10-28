import React from 'react'
import{Text,ActivityIndicator,ListView} from 'react-native'
import Style from '../Style'
import axios from 'axios'
import WeatherRow from './weather/Row'

export default class List extends React.Component {
    static navigationOptions = (navigation) => {
        return{
            title:`Forcast / ${navigation.navigation.state.params.city}`,
            tabBarIcon : () => {
                return <Image source={require('./icons/home.png')} style={{width:20 ,height:20}}/>
            }
        }  
    }

    constructor (props){
        super(props)
        this.state ={
            ds : new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
            city:this.props.navigation.state.params.city,
            report: null,
        }
        setTimeout(()=>{
            this.fetchWeather()
        },1000)
    }
    fetchWeather(){
        axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&mode=json&units=metric&cnt=20&APPID=3404e2f3392aa5e659b93f20c9965874`)
        .then((response) =>{
            this.setState({report: response.data})
        })
    }
    render(){

            if(this.state.report === null)
            {
                return(
                    <ActivityIndicator color={Style.color} size="large"/>
                )
            }else{
                return(
                 <ListView
                    dataSource={this.state.ds.cloneWithRows(this.state.report.list)}
                    renderRow={(row,j, k) => <WeatherRow day={row} index={parseInt(k,10)} />}
                    />  
                )
            } 
    }
}