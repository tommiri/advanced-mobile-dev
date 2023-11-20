import { StyleSheet, View, Text, Image } from 'react-native';

const WeatherInfo = ({
  weatherData: { description, temperature, windSpeed, icon },
}) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <View
        style={{
          flex: 1,
        }}
      >
        <Text style={{ fontSize: 30 }}>{description}</Text>
        <Text style={{ fontSize: 30 }}>{temperature + ' C'}</Text>
        <Text style={{ fontSize: 30 }}>{windSpeed + ' m/s'}</Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image
          source={{
            uri: `http://openweathermap.org/img/wn/${icon}@4x.png`,
          }}
          style={{
            height: 150,
            width: 150,
          }}
        ></Image>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default WeatherInfo;
