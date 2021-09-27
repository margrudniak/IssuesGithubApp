import {StyleSheet, ViewStyle} from 'react-native';

interface Styles {
  container: ViewStyle;
  input: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    backgroundColor: 'white',
    borderRadius: 50,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default styles;
