import {StyleSheet, ViewStyle} from 'react-native';

interface Styles {
  background: ViewStyle;
  container: ViewStyle;
  wrapHeader: ViewStyle;
  wrapTitile: ViewStyle;
  elementWrapper: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  background: {
    backgroundColor: '#DEDEDE',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  wrapHeader: {
    padding: 20,
  },
  wrapTitile: {
    marginBottom: 20,
  },
  elementWrapper: {
    marginVertical: 10,
  },
});

export default styles;
