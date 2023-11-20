import { View, TextInput, StyleSheet } from 'react-native';

const TextInputView = ({
  style,
  inputPlaceholder,
  inputValue,
  inputOnChange,
}) => {
  return (
    <View style={style}>
      <TextInput
        placeholder={inputPlaceholder}
        style={styles.searchField}
        value={inputValue}
        onChangeText={(v) => inputOnChange(v)}
      ></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  searchField: {
    fontSize: 16,
    backgroundColor: '#fff',
    borderWidth: 1,
    margin: 12,
    marginTop: 50,
    height: 40,
    padding: 10,
    borderRadius: 20,
    textAlign: 'center',
  },
});

export default TextInputView;
