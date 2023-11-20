import { StyleSheet, View, Button } from 'react-native';

const ButtonView = ({ style, btnTitle, btnOnPress }) => {
  return (
    <View style={style}>
      <Button title={btnTitle} onPress={btnOnPress}></Button>
    </View>
  );
};

export default ButtonView;
