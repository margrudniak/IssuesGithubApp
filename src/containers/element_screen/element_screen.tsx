import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Button, ScrollView, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {GText} from '../../components';

export interface ElementScreenProps {}
export const ElementScreen: React.FC<ElementScreenProps> = ({route}) => {
  const {state, title, body} = route.params;

  const navigation = useNavigation();

  return (
    <ScrollView>
      <SafeAreaView>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Button title={'BACK'} onPress={() => navigation.goBack()} />
          <GText>{state}</GText>
        </View>
        <View style={{padding: 20}}>
          <GText>{title}</GText>
          <GText>{body}</GText>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};
