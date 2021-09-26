import React from 'react';
import {Text} from 'react-native';

export interface GTextProps {}
export const GText: React.FC<GTextProps> = ({children}) => {
  return <Text>{children}</Text>;
};
