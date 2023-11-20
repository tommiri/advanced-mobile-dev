import { useState } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { API_KEY } from '@env';

import Header from './components/Header';
import WeatherInfo from './components/WeatherInfo';

const App = () => {
  const [weatherData, setWeatherData] = useState({
    cityName: 'Tampere',
    description: 'Sunny',
    temperature: 0,
    windSpeed: 0,
    icon: '01d',
  });

  const fetchWeatherData = async () => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=Tampere&appid=${API_KEY}&units=metric`
      );
      const weatherJSON = await res.json();
      setWeatherData({
        cityName: weatherJSON.name,
        description: weatherJSON.weather[0].description,
        temperature: weatherJSON.main.temp,
        windSpeed: weatherJSON.wind.speed,
        icon: weatherJSON.weather[0].icon,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <Header cityName={weatherData.cityName} />
      </View>
      <View style={styles.middleView}>
        <WeatherInfo weatherData={weatherData} />
      </View>
      <View style={styles.bottomView}>
        <Button
          onPress={fetchWeatherData}
          title="Get weather data"
        ></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 100,
    backgroundColor: '#fff',
    padding: 10,
  },
  topView: {
    flex: 20,
    backgroundColor: 'red',
    borderWidth: 2,
    borderBottomWidth: 0,
  },
  middleView: {
    flex: 65,
    backgroundColor: 'yellow',
    borderWidth: 2,
  },
  bottomView: {
    flex: 15,
    backgroundColor: 'blue',
    borderWidth: 2,
    borderTopWidth: 0,
  },
});

export default App;
