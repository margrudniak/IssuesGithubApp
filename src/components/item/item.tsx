import React, {useEffect} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {GText} from '..';

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
    <TouchableOpacity
      onPress={onPress}
      style={{borderWidth: 1, borderColor: 'red', padding: 10}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingBottom: 10,
        }}>
        <GText>{number}</GText>
        <GText>{created_at}</GText>
      </View>
      <GText>{title}</GText>
    </TouchableOpacity>
  );
};
