import { Text, View, Button, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import { API_KEY } from '@env';

const WeatherForecastScreen = () => {
  // useEffect(() => {
  //   fetchWeather('Helsinki');
  // }, []);

  const urlBase =
    'https://api.openweathermap.org/data/2.5/forecast?q=';

  const fetchWeather = async (location: string) => {
    try {
      const res = await fetch(
        `${urlBase}${location}&appid=${API_KEY}&units=metric`
      );
      const weatherObject: Promise<any> = await res.json();
      console.log(weatherObject);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log(error.message);
        return;
      }
      console.log(error);
    }
  };

  return (
    <View>
      <Text>Tampere</Text>
      <FlatList></FlatList>
      <Button
        title="Get weather"
        onPress={() => fetchWeather('Tampere')}
      />
    </View>
  );
};

export default WeatherForecastScreen;
