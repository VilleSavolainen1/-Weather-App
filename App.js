import React, { Component } from 'react';
import { Text, View, TextInput, Image, TouchableOpacity, ImageBackground } from 'react-native';
import Hour from './components/upcoming';

const apiKey = 'bb00579aa9065dd7cebacab52d25b101';

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      input: '',
      city: '',
      country: '',
      temperature: '',
      error: '',
      img: 'blank',
      description: '',
      deschour: '',
      deschour1: '',
      deschour2: '',
      deschour3: '',
      deschour4: '',
      deschour5: '',
      deschour6: '',
      deschour7: '',
      deschour8: '',
      wind: '',
      temphourly: '',
      temphourly1: '',
      temphourly2: '',
      temphourly3: '',
      temphourly4: '',
      temphourly5: '',
      temphourly6: '',
      temphourly7: '',
      temphourly8: '',
      time: '',
      time1: '',
      time2: '',
      time3: '',
      time4: '',
      time5: '',
      time6: '',
      time7: '',
      time8: '',
    }
  };

  updateSearch = input => {
    this.setState({ input });
  };

  search = async() => {
     //Current weather url response
     const { input } = this.state;
     const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&APPID=${apiKey}&lang=fi`);
     const response = await api_call.json();

     //Hourly response
    const api_call_hourly = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${input}&appid=${apiKey}`)
    const resphour = await api_call_hourly.json();
    
    
    if(resphour.list){
      this.setState({ 
      temphourly: resphour.list[0].main.temp,
      temphourly1: resphour.list[1].main.temp,
      temphourly2: resphour.list[2].main.temp,
      temphourly3: resphour.list[3].main.temp,
      temphourly4: resphour.list[4].main.temp,
      temphourly5: resphour.list[5].main.temp,
      temphourly6: resphour.list[6].main.temp,
      temphourly7: resphour.list[7].main.temp,
      temphourly8: resphour.list[8].main.temp, 
      time: resphour.list[0].dt_txt, 
      time1: resphour.list[1].dt_txt, 
      time2: resphour.list[2].dt_txt,
      time3: resphour.list[3].dt_txt,
      time4: resphour.list[4].dt_txt,
      time5: resphour.list[5].dt_txt,
      time6: resphour.list[6].dt_txt,
      time7: resphour.list[7].dt_txt,
      time8: resphour.list[8].dt_txt,
      deschour: resphour.list[0].weather[0].main,
      deschour1: resphour.list[1].weather[0].main,
      deschour2: resphour.list[2].weather[0].main,
      deschour3: resphour.list[3].weather[0].main,
      deschour4: resphour.list[4].weather[0].main,
      deschour5: resphour.list[5].weather[0].main,
      deschour6: resphour.list[6].weather[0].main,
      deschour7: resphour.list[7].weather[0].main,
      deschour8: resphour.list[8].weather[0].main
      });
    }
     if(response.main){
       this.setState({ city: response.name, 
        temperature: (response.main.temp - 273.15).toFixed(1) + ' °C', 
        country: response.sys.country, error: '', 
        description: response.weather[0].description,
        wind: 'Tuuli: ' + response.wind.speed + ' m/s'})
        
       switch(response.weather[0].main){
      
        case "Clouds": this.setState({ img: require('./assets/clouds.png')});
        break;
  
        case "Thunderstorm": this.setState({ img: require('./assets/thunderstorm.png')});
        break;
  
        case "Drizzle": this.setState({ img: require('./assets/drizzle.png')});
        break;
  
        case "Rain": this.setState({ img: require('./assets/rain.png')});
        break;
  
        case "Snow": this.setState({ img: require('./assets/snow.png')});
        break;
        
        case "Clear": this.setState({ img: require('./assets/clear.png')});
        break;
  
        case "Mist":
        case "Smoke":
        case "Haze":
        case "Dust":
        case "Fog": 
        case "Sand":
        case "Ash":
        case "Squall":
        case "Tornado": this.setState({ img: require('./assets/mist.png')});
        break;
  
        default: this.setState({ img: "blank"});
        }

     }else {
       this.setState({ city: '', 
            temperature: '', 
            country: '', 
            error: `${input} ei löydy!`,
            description: '',
            wind: '',
            img: 'blank', 
            temphourly: '',
            temphourly1: '',
            temphourly2: '',
            temphourly3: '',
            temphourly4: '',
            temphourly5: '',
            temphourly6: '',
            temphourly7: '',
            temphourly8: '',
            time: '',
            time1: '',
            time2: '',
            time3: '',
            time4: '',
            time5: '',
            time6: '',
            time7: '',
            time8: '',
            deschour: '',
            deschour1: '',
            deschour2: '',
            deschour3: '',
            deschour4: '',
            deschour5: '',
            deschour6: '',
            deschour7: '',
            deschour8: ''});
     }
    const date = new Date();
    const time = date.getUTCHours() + 2;
    const unix_sunrise = new Date(response.sys.sunrise * 1000);
    const unix_sunset = new Date(response.sys.sunset * 1000);
    const sunrise = unix_sunrise.getHours();
    const sunset = unix_sunset.getHours();
    if(time > sunset && time < sunrise){
      if(response.weather[0].main = "Clear")
      this.setState({ img: require('./assets/moon.png')}); 
    }
  }
render(){
  const { city, country, error, description, wind, temperature, img } = this.state;

  return(
    <ImageBackground source={require('./assets/serveimage.jpg')} style={{width: '100%', height: '100%'}}>
    <View style={{padding: 30, height: '100%'}}>
      <Image  style={{width: '100%'}} source={require('./assets/logo.png')}/>
      <View style={{flexDirection: 'row', justifyContent: 'center', paddingBottom: 16, borderBottomWidth: 1, borderColor: '#fff'}}>
        <TextInput style={{fontSize: 22, 
          backgroundColor: '#fff', 
          width: 180, 
          height: 46,
          borderRadius: 5,
          textAlign: 'center'
        }} 
          placeholder="Paikkakunta:"
          onChangeText={this.updateSearch} 
          value={this.state.input}
          />
        <TouchableOpacity onPress={this.search} style={{fontSize: 22, 
          backgroundColor: '#004d80', 
          width: 80, 
          height: 46,
          borderRadius: 5,
          }}>
          <View>
            <Text style={{fontSize: 24, color: '#fff', paddingTop: 5, paddingLeft: 17}}>Hae</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{height: 285, paddingTop: 2}}>
        <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          <Image style={{width: 64, height: 55}} source={img} />
        </View> 
        <Text style={{fontSize: 22, textAlign:'center', color: 'white', paddingBottom: 10}}>{city + ' '}{country}{error}</Text>
        <Text style={{fontSize: 65, textAlign: 'center', color: 'white', paddingBottom: 10}} >{temperature}</Text>
        <Text style={{fontSize: 25, textAlign:'center', color: 'white', }}>{description}</Text>
        <Text style={{fontSize: 22, textAlign:'center', color: 'white', paddingBottom: 5}}>{wind}</Text>
      </View>
      <View>
        <Hour 
        temphourly={this.state.temphourly}
        temphourly1={this.state.temphourly1}
        temphourly2={this.state.temphourly2}
        temphourly3={this.state.temphourly3}
        temphourly4={this.state.temphourly4}
        temphourly5={this.state.temphourly5}
        temphourly6={this.state.temphourly6}
        temphourly7={this.state.temphourly7}
        temphourly8={this.state.temphourly8}
        deschourly={this.state.deschourly}
        time={this.state.time}
        time1={this.state.time1}
        time2={this.state.time2}
        time3={this.state.time3}
        time4={this.state.time4}
        time5={this.state.time5}
        time6={this.state.time6}
        time7={this.state.time7}
        time8={this.state.time8}
        deschour={this.state.deschour}
        deschour1={this.state.deschour1}
        deschour2={this.state.deschour2}
        deschour3={this.state.deschour3}
        deschour4={this.state.deschour4}
        deschour5={this.state.deschour5}
        deschour6={this.state.deschour6}
        deschour7={this.state.deschour7}
        deschour8={this.state.deschour8}
        />
      </View>
    </View>
  </ImageBackground>
  )
}
}


