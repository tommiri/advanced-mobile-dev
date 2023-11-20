import { StyleSheet, KeyboardAvoidingView } from 'react-native';
import { useState } from 'react';
import { API_KEY } from '@env';

import WeatherView from './components/WeatherView';
import TextInputView from './components/TextInputView';
import ButtonView from './components/ButtonView';

const App = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState({
    name: '',
    icon: '',
    temp: 0,
    windSpeed: 0,
  });
  const [isError, setError] = useState(false);

  const getWeatherData = async () => {
    setError(false);

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const weatherJSON = await res.json();
      setWeatherData({
        name: weatherJSON.name,
        icon: weatherJSON.weather[0].icon,
        temp: Math.round(weatherJSON.main.temp),
        windSpeed: Math.round(weatherJSON.wind.speed),
      });
    } catch (error) {
      setError(true);
    }
  };

  return (
    // Use KeyboardAvoidingView to avoid keyboard messing with the layout
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
      enabled={Platform.OS === 'ios'}
    >
      <TextInputView
        style={styles.header}
        inputPlaceholder={'Get the weather in your city!'}
        inputValue={city}
        inputOnChange={(v) => setCity(v)}
      />
      <WeatherView
        style={styles.weatherView}
        weatherData={weatherData}
        isError={isError}
      />
      <ButtonView
        style={styles.footer}
        btnTitle="Get weather"
        btnOnPress={getWeatherData}
      />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 100,
    backgroundColor: '#eee',
  },
  header: {
    flex: 20,
    justifyContent: 'center',
    alignContent: 'center',
  },
  weatherView: {
    flex: 50,
    marginTop: 80,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },
  footer: {
    flex: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
