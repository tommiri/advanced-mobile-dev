import { createDrawerNavigator } from '@react-navigation/drawer';
import WeatherSettings from './WeatherSettings';

const Drawer = createDrawerNavigator();

const Settings = () => {
  return (
    <Drawer.Navigator initialRouteName="WeatherSettings">
      <Drawer.Screen
        name="WeatherSettings"
        component={WeatherSettings}
      />
    </Drawer.Navigator>
  );
};

export default Settings;
