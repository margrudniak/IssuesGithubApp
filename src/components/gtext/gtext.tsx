import React from 'react';
import {Text, TextStyle, View} from 'react-native';
import styles from './gtext.style';
export interface GTextProps {
  style?: TextStyle;
}

export const GText: React.FC<GTextProps> = ({children, style}) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};
