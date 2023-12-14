import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { useEffect, useState } from 'react';
import * as Location from 'expo-location';

import { API_KEY } from '@env';

import ListItem from '../components/ListItem';

const Forecast = () => {
  const [weatherData, setWeatherData] = useState(undefined);
  const [{ lat, lng }, setLocation] = useState({
    lat: undefined,
    lng: undefined,
  });

  const getLocation = async () => {
    try {
      const { status } =
        await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
      }
      const location = await Location.getCurrentPositionAsync({});
      setLocation({
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      });
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
        return;
      }
      console.log(`Something went wrong! ${error}`);
    }
  };

  const urlBase = 'https://api.openweathermap.org/data/2.5/forecast?';

  const fetchForecast = async () => {
    try {
      getLocation();
      const res = await fetch(
        `${urlBase}lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
      );
      const data = await res.json();
      setWeatherData({
        list: data.list,
        city: data.city,
        country: data.country,
      });
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
        return;
      }
      console.log(`Something went wrong! ${error}`);
    }
  };

  const ListHeader = () => {
    return (
      <View style={styles.listHeader}>
        <Text style={styles.listHeaderText}>
          {weatherData?.city
            ? `${weatherData.city.name}, ${weatherData.city.country}`
            : 'No location found!'}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <FlatList
          data={weatherData?.list}
          renderItem={({ item }) => <ListItem item={item} />}
          keyExtractor={(item) => item.dt.toString()}
          ListHeaderComponent={ListHeader}
          stickyHeaderIndices={[0]}
        />
      </View>
      <TouchableOpacity
        style={styles.btn}
        title="Get forecast"
        onPress={() => fetchForecast()}
      >
        <Text style={styles.btnText}>Get forecast</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 100,
  },
  list: {
    flex: 60,
    backgroundColor: '#B9D9EB',
  },
  btn: {
    backgroundColor: '#ffdf00',
    flex: 7,
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
  listHeader: {
    flex: 1,
    backgroundColor: '#ffdf00',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderTopWidth: 2,
  },
  listHeaderText: {
    color: '#333',
    fontSize: 30,
  },
});

export default Forecast;
