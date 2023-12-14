import { Platform, SafeAreaView, StatusBar } from 'react-native';

import Forecast from './screens/Forecast';

const App = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop:
          Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      }}
    >
      <Forecast />
    </SafeAreaView>
  );
};

export default App;
