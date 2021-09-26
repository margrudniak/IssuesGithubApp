import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {GText, Item} from '../../components';
import {getIssues} from '../../utils/api';

type Issue = {
  id: number;
  number: number;
  title: string;
  created_at: string;
  state: string;
  body: string;
};

export interface MainScreenProps {}

export const MainScreen: React.FC<MainScreenProps> = ({navigation}) => {
  const [data, setData] = useState<Array<Issue> | []>([]);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => console.log('data', data), [data]);

  useEffect(() => console.log('isLoading', isLoading), [isLoading]);

  useEffect(() => {
    getIssues(
      page,
      e =>
        page == 0 ? setData(e) : e.map(el => setData(prev => [...prev, el])),
      () => setIsError(true),
      () => setIsLoading(false),
    );
  }, [page]);

  const renderError = () => <GText>{'SOMETHING WENT WRONG ...'}</GText>;

  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'space-between', alignItems: 'center'}}>
      {isError ? (
        renderError()
      ) : isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={item => item.id + ''}
          renderItem={({item}) => (
            <Item
              number={item.number}
              created_at={item.created_at}
              title={item.title}
              onPress={() =>
                navigation.navigate('Element', {
                  state: item.state,
                  title: item.title,
                  body: item.body,
                })
              }
            />
          )}
          onEndReached={() => setPage(page + 1)}
          onEndReachedThreshold={0.5}
          ListFooterComponent={<ActivityIndicator />}
        />
      )}
    </SafeAreaView>
  );
};
