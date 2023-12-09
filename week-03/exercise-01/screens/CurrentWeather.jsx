import { View, Text, Button } from 'react-native';

const CurrentWeather = ({ navigation }) => {
  return (
    <View>
      <Text>Current weather screen</Text>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
      <Button
        title="Go to Favourites"
        onPress={() => navigation.navigate('Favourites')}
      />
    </View>
  );
};

export default CurrentWeather;
