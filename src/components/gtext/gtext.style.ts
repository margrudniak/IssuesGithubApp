import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

interface Styles {
  container: ViewStyle;
  text: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    padding: 5,
    backgroundColor: 'white',
    borderRadius: 20,
  },
  text: {
    textAlign: 'center',
  },
});

export default styles;
