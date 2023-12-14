import { StyleSheet, Text, SafeAreaView, Button } from 'react-native';
import { useState } from 'react';
import { Accelerometer } from 'expo-sensors';
import * as Location from 'expo-location';

const App = () => {
  const [{ x, y, z }, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });
  const [subscription, setSubscription] = useState(null);
  const [{ lat, lng }, setLocation] = useState({
    lat: 0,
    lng: 0,
  });

  const _subscribe = () => {
    setSubscription(Accelerometer.addListener(setData));
  };

  const _unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  const toggleAccelerometer = () => {
    Accelerometer.setUpdateInterval(200);
    subscription ? _unsubscribe() : _subscribe();
  };

  const getLocation = async () => {
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
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>x: {x}</Text>
      <Text>y: {y}</Text>
      <Text>z: {z}</Text>
      <Button
        title={`${subscription ? 'Start' : 'Stop'} level`}
        onPress={() => toggleAccelerometer()}
      />

      <Text>Latitude: {lat}</Text>
      <Text>Longitude: {lng}</Text>
      <Button title="Get location" onPress={() => getLocation()} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
