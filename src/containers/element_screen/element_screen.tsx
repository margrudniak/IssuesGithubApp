import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Button, ScrollView, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Form, GText} from '../../components';
import {getComments, saveComments} from '../../utils/async_storage';
import styles from './element_screen.style';

export interface ElementScreenProps {}

export const ElementScreen: React.FC<ElementScreenProps> = ({route}) => {
  const {id, state, title, body} = route.params;
  const [listComments, setListComments] = useState([]);
  const [comment, setComment] = useState('');

  const navigation = useNavigation();

  const readItemFromStorage = async () => {
    const item = await getComments();
    setListComments(JSON.parse(item).filter(e => +e.id == +id));
  };

  const onSubmit = async () => {
    await saveComments({id: id, comment: comment});
    await readItemFromStorage();
  };

  useEffect(() => {
    readItemFromStorage();
  }, []);

  return (
    <ScrollView style={styles.background}>
      <SafeAreaView>
        <View style={styles.container}>
          <Button
            title={'BACK'}
            color={'black'}
            onPress={() => navigation.goBack()}
          />
          <GText>{state}</GText>
        </View>
        <View style={styles.wrapHeader}>
          <GText style={styles.wrapTitile}>{title}</GText>
          <GText>{body}</GText>
        </View>
        {listComments.map((e, i) => (
          <GText key={i} style={styles.elementWrapper}>
            {e.comment}
          </GText>
        ))}
        <Form
          onChange={setComment}
          value={comment}
          onSubmit={() => onSubmit()}
        />
      </SafeAreaView>
    </ScrollView>
  );
};
