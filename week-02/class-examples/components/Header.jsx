import { View, Text, StyleSheet } from 'react-native';

const Header = ({ cityName }) => {
  return (
    <View style={styles.headerBackground}>
      <Text style={styles.headerText}>{cityName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerBackground: {
    flex: 1,
    borderWidth: 2,
  },
  headerText: {
    fontSize: 40,
  },
});

export default Header;
