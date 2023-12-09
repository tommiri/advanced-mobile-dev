import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Forecast from './Forecast';
import CurrentWeather from './CurrentWeather';

const Tab = createBottomTabNavigator();

const Weather = () => {
  return (
    <Tab.Navigator initialRouteName="CurrentWeather">
      <Tab.Screen name="CurrentWeather" component={CurrentWeather} />
      <Tab.Screen name="Forecast" component={Forecast} />
    </Tab.Navigator>
  );
};

export default Weather;
