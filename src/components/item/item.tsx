import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {GText} from '..';
import {formatDate} from '../../utils/helpers';
import styles from './item.style';
export interface ItemProps {
  number: number;
  title: string;
  created_at: string;
  onPress(): void;
}

export const Item: React.FC<ItemProps> = ({
  number,
  title,
  created_at,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.element}>
        <GText>{number}</GText>
        <GText>{formatDate(created_at)}</GText>
      </View>
      <GText>{title}</GText>
    </TouchableOpacity>
  );
};
