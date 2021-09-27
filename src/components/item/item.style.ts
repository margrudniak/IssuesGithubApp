import {StyleSheet, ViewStyle} from 'react-native';

interface Styles {
  container: ViewStyle;
  element: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    backgroundColor: '#DEDEDE',
    borderRadius: 50,
    marginVertical: 20,
    padding: 20,
  },
  element: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
});

export default styles;
