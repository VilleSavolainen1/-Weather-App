import React, {Component} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Hour extends Component{
  
    render(){
        const { temphourly, temphourly1, temphourly2, 
        temphourly3, temphourly4, temphourly5, 
        temphourly6, temphourly7, temphourly8, deschour, deschour1, deschour2, deschour3, deschour4, deschour5,
        deschour6, deschour7, deschour8} = this.props;
        const {time, time1, time2, time3, time4, time5, time6, time7, time8} = this.props;
        const temps = [temphourly, temphourly1, temphourly2, temphourly3, temphourly4, temphourly5, temphourly6, temphourly7, temphourly8];
        let times = [time, time1, time2, time3, time4, time5, time6, time7, time8];
        let hourly_description = [deschour, deschour1, deschour2, deschour3, deschour4, deschour5, deschour6, deschour7, deschour8];
        let celsius = [];
        let hour = [];
        let descimage = [];


        //Kelvin to celsius 
       if(time){
        temps.forEach(short => {
            short = (short - 273.15).toFixed(1) + ' °C ';
            celsius.push(short);
        });
       
        //Setting weather icons for upcoming weather
        hourly_description.forEach(image => {
            switch(image){
                case "Clouds": descimage.push(require("../assets/clouds.png"));
                break;

                case "Thunderstorm": descimage.push(require("../assets/thunderstorm.png"));
                break;

                case "Drizzle": descimage.push(require("../assets/drizzle.png"));
                break;

                case "Rain": descimage.push(require("../assets/rain.png"));
                break;
          
                case "Snow": descimage.push(require("../assets/snow.png"));
                break;
                
                case "Clear": descimage.push(require("../assets/clear.png"));
                break;
          
                case "Mist":
                case "Smoke":
                case "Haze":
                case "Dust":
                case "Fog": 
                case "Sand":
                case "Ash":
                case "Squall":
                case "Tornado": descimage.push(require("../assets/mist.png"));
                break;

                default: descimage.push('');
            }
        })

        
    //Get time    
        times.forEach(short => {
            short = short.slice(11,16);
            hour.push(short);
        });
    }

    //Styling
    const styles = StyleSheet.create({
        upcoming: {
            fontSize: 17,
            textAlign: 'center',
            color: '#fff',
            paddingLeft: 5,
            paddingRight: 5,
            width: 70             
        },
        row: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
        },
        image: {
            width: 25,
            height: 25,
            marginRight: 90
        }
    })
    return(
        <View>
            <View style={{borderTopWidth: 1, borderColor: '#fff', paddingBottom: 8}}></View>
            <View style={styles.row}>
                <Image source={require('../assets/clock.png')} style={styles.image}/>
            </View>
            <View style={styles.row}>
                <Text style={styles.upcoming}>{hour[0]}</Text>
                <Text style={styles.upcoming}>{celsius[0]}</Text>
                <Image style={{width: 25, height: 23}} source={descimage[0]}/>
            </View>
            <View style={styles.row}>
                <Text style={styles.upcoming}>{hour[1]}</Text>
                <Text style={styles.upcoming}>{celsius[1]}</Text>
                <Image style={{width: 25, height: 23}} source={descimage[1]}/>
            </View>
            <View style={styles.row}>
                <Text style={styles.upcoming}>{hour[2]}</Text>
                <Text style={styles.upcoming}>{celsius[2]}</Text>
                <Image style={{width: 25, height: 23}} source={descimage[2]}/>
            </View>
            <View style={styles.row}>
                <Text style={styles.upcoming}>{hour[3]}</Text>
                <Text style={styles.upcoming}>{celsius[3]}</Text>
                <Image style={{width: 25, height: 23}} source={descimage[3]}/>
            </View>
            <View style={styles.row}>
                <Text style={styles.upcoming}>{hour[4]}</Text>
                <Text style={styles.upcoming}>{celsius[4]}</Text>
                <Image style={{width: 25, height: 23}} source={descimage[4]}/>
            </View>
            <View style={styles.row}>
                <Text style={styles.upcoming}>{hour[5]}</Text>
                <Text style={styles.upcoming}>{celsius[5]}</Text>
                <Image style={{width: 25, height: 23}} source={descimage[5]}/>
            </View>
            <View style={styles.row}>
                <Text style={styles.upcoming}>{hour[6]}</Text>
                <Text style={styles.upcoming}>{celsius[6]}</Text>
                <Image style={{width: 25, height: 23}} source={descimage[6]}/>
            </View>
            <View style={styles.row}>
                <Text style={styles.upcoming}>{hour[7]}</Text>
                <Text style={styles.upcoming}>{celsius[7]}</Text>
                <Image style={{width: 25, height: 23}} source={descimage[7]}/>
            </View>
            <View style={styles.row}>
                <Text style={styles.upcoming}>{hour[8]}</Text>
                <Text style={styles.upcoming}>{celsius[8]}</Text>
                <Image style={{width: 25, height: 23}} source={descimage[8]}/>
            </View>
        </View>
        )
    }
}