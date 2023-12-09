import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CurrentWeather from './screens/CurrentWeather';
import Forecast from './screens/Forecast';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Forecast">
        <Tab.Screen name="Weather" component={CurrentWeather} />
        <Tab.Screen name="Forecast" component={Forecast} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
