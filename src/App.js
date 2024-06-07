import React from "react";
import Header from './components/header.js';
import Card from './components/card.js';
import SearcWeather from './components/seacweather.js';

const API_KEY = "286bfbd5e4d99d2062867d9dd90b891e"
const second_city = "Moscow";
const first_city = "London";


class App extends React.Component {

  state = {
    imagesource: undefined,
    temp1: undefined,
    city: undefined,
    humidity1: undefined,
    description1: undefined,
    temp2: undefined,
    humidity2: undefined,
    description2: undefined,
    temp3: undefined,
    humidity3: undefined,
    description3: undefined,
    temp4: undefined,
    humidity4: undefined,
    description4: undefined,
    temp5: undefined,
    humidity5: undefined,
    description5: undefined,
    temp6: undefined,
    humidity6: undefined,
    description6: undefined,
    temp7: undefined,
    humidity7: undefined,
    description7: undefined
  }

  

  gettingWeather = async (e) => {
    if (e.preventDefault) {
      e.preventDefault();
  }
    const cityname = e.target.elements.cityname.value
    try {
      const api_url = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityname}&cnt=8&units=metric&appid=${API_KEY}`, {
        headers: {
          'accept': 'application/json'
        }
      });
  
      if (!api_url.ok) {
        throw new Error('Invalid');
      }
  
      const data = await api_url.json();
      const forecastDay1 = data.list[0];
      const forecastDay2 = data.list[1];
      const forecastDay3 = data.list[2];
      const forecastDay4 = data.list[3];
      const forecastDay5 = data.list[4];
      const forecastDay6 = data.list[5];
      const forecastDay7 = data.list[6];

      console.log(data);
      console.log(forecastDay1);
  
      if (data && forecastDay1.main && forecastDay1.weather && forecastDay1.sys) {

        this.setState({
          temp: forecastDay1.main.temp,
          humidity: forecastDay1.main.humidity,
          city: data.city.name,
          country: forecastDay1.sys.country,
          description: forecastDay1.weather[0].description,
          temp2: forecastDay2.main.temp,
          humidity2: forecastDay2.main.humidity,
          description2: forecastDay2.weather[0].description,
          temp3: forecastDay3.main.temp,
          humidity3: forecastDay3.main.humidity,
          description3: forecastDay3.weather[0].description,
          temp4: forecastDay4.main.temp,
          humidity4: forecastDay4.main.humidity,
          description4: forecastDay4.weather[0].description,
          temp5: forecastDay5.main.temp,
          humidity5: forecastDay5.main.humidity,
          description5: forecastDay5.weather[0].description,
          temp6: forecastDay6.main.temp,
          humidity6: forecastDay6.main.humidity,
          description6: forecastDay6.weather[0].description,
          temp7: forecastDay7.main.temp,
          humidity7: forecastDay7.main.humidity,
          description7: forecastDay7.weather[0].description
        });
      } else {
        console.log("Incorrected data");
      }
    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount() {
    this.gettingWeather({
      target: {
        elements: {
          cityname: {
            value: first_city
          }
        }
      }
    });
  }


  render() {
    return (
        <div>
          <Header/>
          <SearcWeather gettingWeather={this.gettingWeather}/>
          <div className="container">
            <div className="row">
              <div className="col">
            <Card
            temp = {this.state.temp}
             humidity = {this.state.humidity}
             city = {this.state.city}
             description = {this.state.description}
             imagesource = {this.state.imagesource}/>
              </div>
              <div className="col">
             <Card
            temp = {this.state.temp2}
             humidity = {this.state.humidity2}
             city = {this.state.city}
             description = {this.state.description2}/>
            </div>
            <div className="col">
             <Card
            temp = {this.state.temp3}
             humidity = {this.state.humidity3}
             city = {this.state.city}
             description = {this.state.description3}/>
            </div>

            <div className="col">
             <Card
            temp = {this.state.temp4}
             humidity = {this.state.humidity4}
             city = {this.state.city}
             description = {this.state.description4}/>
            </div>

            <div className="row">

            <div className="col">

            <Card
            temp = {this.state.temp5}
             humidity = {this.state.humidity5}
             city = {this.state.city}
             description = {this.state.description5}/>
            </div>


            <div className="col">

            <Card
            temp = {this.state.temp6}
             humidity = {this.state.humidity6}
             city = {this.state.city}
             description = {this.state.description6}
             />
            </div>

            
            <div className="col">

            <Card
            temp = {this.state.temp7}
             humidity = {this.state.humidity7}
             city = {this.state.city}
             description = {this.state.description7}/>
            </div>
            </div>

            

            </div>
            </div>
          </div>


    );
  
  }
}


export default App;
