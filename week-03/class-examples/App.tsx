import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { TabParamList } from './types/navigation';

import CurrentWeatherScreen from './screens/CurrentWeatherScreen';
import WeatherForecastScreen from './screens/WeatherForecastScreen';

const Tab = createBottomTabNavigator<TabParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Forecast">
        <Tab.Screen name="Weather" component={CurrentWeatherScreen} />
        <Tab.Screen
          name="Forecast"
          component={WeatherForecastScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
