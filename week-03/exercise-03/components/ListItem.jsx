import { StyleSheet, View, Text, Image } from 'react-native';

const ListItem = ({ item: { dt, main, weather, wind } }) => {
  const timestamp = new Date(dt * 1000).toLocaleDateString('en-FI', {
    hour: '2-digit',
    minute: '2-digit',
  });
  const temperature = Math.round(main?.temp);
  const windSpeed = Math.round(wind?.speed);
  const iconUrl = `http://openweathermap.org/img/wn/${weather[0]?.icon}@4x.png`;

  return (
    <View style={styles.container}>
      <Text style={{ textAlign: 'center' }}>{timestamp}</Text>
      <View style={styles.weatherContainer}>
        <View>
          <Text style={styles.infoText}>🌡️</Text>
          <Text style={styles.infoText}>{temperature}°C</Text>
        </View>
        <View>
          <Text style={styles.infoText}>💨</Text>
          <Text style={styles.infoText}>{windSpeed} m/s</Text>
        </View>
        <View style={styles.imgContainer}>
          <Image
            style={styles.icon}
            source={{
              uri: iconUrl,
            }}
          />
          <Text style={{ ...styles.infoText, top: -10 }}>
            {weather[0].main}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 100,
    paddingVertical: 10,
  },
  weatherContainer: {
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  infoText: {
    fontFamily: 'sans-serif',
    fontSize: 20,
    textAlign: 'center',
  },
  imgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 50,
    height: 50,
  },
});

export default ListItem;
