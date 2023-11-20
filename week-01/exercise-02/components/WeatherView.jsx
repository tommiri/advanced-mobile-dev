import { View, Text, StyleSheet, Image } from 'react-native';

const WeatherView = ({
  weatherData: { name, icon, temp, windSpeed },
  isError,
  style,
}) => {
  return (
    <View style={style}>
      {!name || isError ? (
        // Use conditional rendering to show a message if there is no data
        <Text style={styles.errorMsg}>
          {!name
            ? 'Enter a city and press the button to get the weather!'
            : 'Invalid city name!'}
        </Text>
      ) : (
        <>
          <Text style={styles.cityName}>{name}</Text>
          <Image
            style={styles.icon}
            source={{
              uri: `http://openweathermap.org/img/wn/${icon}@4x.png`,
            }}
          ></Image>
          <Text style={styles.stats}>{temp}&deg;C</Text>
          <Text style={styles.stats}>{windSpeed} m/s</Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
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
  errorMsg: {
    fontSize: 32,
    textAlign: 'center',
  },
});

export default WeatherView;
