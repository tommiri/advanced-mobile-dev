import {
  Text,
  View,
  Button,
  Linking,
  Platform,
  ToastAndroid,
} from 'react-native';

import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type { TabParamList } from '../types/navigation';

type WeatherScreenProps = BottomTabScreenProps<
  TabParamList,
  'Weather'
>;

const CurrentWeatherScreen = ({ navigation }: WeatherScreenProps) => {
  const openMaps = () => {
    const latitude = 67.23;
    const longitude = 23.4;
    const url = Platform.select({
      android: `geo:${latitude},${longitude}`,
      ios: `maps:${latitude},${longitude}`,
    });
    Linking.openURL(url);
  };

  const callPhone = () => {
    if (Platform.OS === 'android') {
      // Show toast
      ToastAndroid.show('Making a phone call...', ToastAndroid.SHORT);
    }
  };

  return (
    <View>
      <Text>Current weather</Text>
      <Button title="Open Maps" onPress={openMaps}></Button>
      <Button title="Call Phone" onPress={callPhone}></Button>
    </View>
  );
};

export default CurrentWeatherScreen;
