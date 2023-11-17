import {
  StyleSheet,
  KeyboardAvoidingView,
  View,
  Button,
  TextInput,
} from 'react-native';
import { useState } from 'react';
import axios from 'axios';
import { API_KEY } from '@env';

import WeatherView from './components/WeatherView';

const App = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [fetchError, setFetchError] = useState(false);

  const handlePress = () => {
    setFetchError(false);
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      )
      .then((response) => {
        setWeatherData(response.data);
      })
      .catch((error) => {
        setFetchError(true);
      });
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
      enabled={Platform.OS === 'ios'}
    >
      <TextInput
        placeholder="Get the weather in your city!"
        style={styles.searchField}
        onChangeText={(newCity) => setCity(newCity)}
      ></TextInput>
      <WeatherView
        weatherData={weatherData}
        error={fetchError}
      ></WeatherView>
      <View style={styles.btn}>
        <Button
          style={styles.btn}
          title="Get weather"
          onPress={handlePress}
        ></Button>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchField: {
    backgroundColor: '#fff',
    borderWidth: 1,
    margin: 12,
    marginTop: 50,
    height: 40,
    padding: 10,
    borderRadius: 20,
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
