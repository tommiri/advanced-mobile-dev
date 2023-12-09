import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { useEffect, useState } from 'react';
import { API_KEY } from '@env';

import ListItem from '../components/ListItem';

const Forecast = ({ navigation }) => {
  const [weatherData, setWeatherData] = useState();

  const urlBase =
    'https://api.openweathermap.org/data/2.5/forecast?q=';

  const fetchForecast = async (location) => {
    try {
      const res = await fetch(
        `${urlBase}${location}&appid=${API_KEY}&units=metric`
      );
      const data = await res.json();
      setWeatherData({
        list: data.list,
        city: data.city,
        country: data.country,
        sunrise: data.city.sunrise,
        sunset: data.city.sunset,
      });
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
        return;
      }
      console.log(`Something went wrong! ${error}`);
    }
  };

  useEffect(() => {
    fetchForecast('Tampere');
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <FlatList
          data={weatherData?.list}
          renderItem={({ item }) => <ListItem item={item} />}
          keyExtractor={(item) => item.dt.toString()}
        />
      </View>
      <TouchableOpacity
        style={styles.btn}
        title="Get weather"
        onPress={() => fetchForecast('Tampere')}
      >
        <Text style={styles.btnText}>Get weather</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 100,
    borderTopWidth: 2,
  },
  list: {
    flex: 60,
    backgroundColor: '#B9D9EB',
  },
  btn: {
    backgroundColor: '#ffdf00',
    flex: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 4,
    borderBottomWidth: 4,
    borderColor: '#333',
  },
  btnText: {
    color: '#333',
    fontSize: 30,
  },
});

export default Forecast;
