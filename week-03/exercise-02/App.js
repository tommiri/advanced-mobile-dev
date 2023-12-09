import { StyleSheet, Text, View, Linking, Button, Platform, ToastAndroid } from 'react-native';

const App = () => {
  const openMaps = () => {
    const latitude = 61.49;
    const longitude = 23.78;
    const url = Platform.select({
      android: `geo:${latitude},${longitude}`,
      ios: `maps:${latitude},${longitude}`,
    });
    Linking.openURL(url);
  };

  const promptAndroid = () => {
    if (Platform.OS === 'android') {
      ToastAndroid.show('Hello Android!', ToastAndroid.SHORT);
    }
  };

  return (
    <View style={styles.container}>
      <Button
        title="Open Google"
        onPress={() => Linking.openURL('https://www.google.com')}
      />
      <Button
        title="Open Maps"
        onPress={openMaps}
      />
      <Button
        title="Click me!"
        onPress={promptAndroid}
      />  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    padding: 16,
    justifyContent: 'center',
    gap: 10,
  },
});

export default App;
