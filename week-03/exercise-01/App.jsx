import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Weather from './screens/Weather';
import Settings from './screens/Settings';
import Favourites from './screens/Favourites';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Weather">
        <Stack.Screen
          name="Weather"
          component={Weather}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Favourites" component={Favourites} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
