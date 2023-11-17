import { View, Text, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 2,
    marginTop: 80,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },
  cityName: {
    fontSize: 32,
  },
  icon: {
    height: 200,
    width: 200,
  },
  stats: {
    fontSize: 24,
  },
});

const WeatherView = ({ weatherData, error }) => {
  if (error || !weatherData) {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 32, textAlign: 'center' }}>
          {!weatherData
            ? 'Enter a city and press the button to get the weather!'
            : 'Invalid city name!'}
        </Text>
      </View>
    );
  }
  const { name, weather, main, wind } = weatherData;
  return (
    <View style={styles.container}>
      <Text style={styles.cityName}>{name}</Text>
      <Image
        style={styles.icon}
        source={{
          uri: `http://openweathermap.org/img/wn/${weather[0].icon}@4x.png`,
        }}
      ></Image>
      <Text style={styles.stats}>{main.temp}&deg;C</Text>
      <Text style={styles.stats}>{wind.speed} m/s</Text>
    </View>
  );
};

export default WeatherView;
