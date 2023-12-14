import { StyleSheet, Text, SafeAreaView } from 'react-native';
import { Accelerometer } from 'expo-sensors';
import { useState, useEffect } from 'react';

const App = () => {
  const [{ x, y, z }, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });
  const [subscription, setSubscription] = useState(null);

  const _subscribe = () => {
    Accelerometer.setUpdateInterval(16);
    setSubscription(Accelerometer.addListener(setData));
  };

  const _unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  useEffect(() => {
    _subscribe();
    return () => _unsubscribe();
  }, []);

  const isLevel =
    Math.abs(x.toFixed(1)) === 0 || Math.abs(y.toFixed(1)) === 0;

  return (
    <SafeAreaView
      style={[
        styles.container,
        isLevel ? styles.level : styles.notLevel,
      ]}
    >
      <Text style={styles.largeText}>
        Device is {!isLevel ? 'not ' : ''}level
      </Text>
      <Text style={styles.mediumText}>x: {x.toFixed(1)}</Text>
      <Text style={styles.mediumText}>y: {y.toFixed(1)}</Text>
      <Text style={styles.mediumText}>z: {z.toFixed(1)}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },
  level: {
    backgroundColor: 'green',
  },
  notLevel: {
    backgroundColor: 'red',
  },
  mediumText: {
    fontSize: 24,
  },
  largeText: {
    fontSize: 36,
  },
});

export default App;
