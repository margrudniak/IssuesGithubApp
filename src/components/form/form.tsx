import React from 'react';
import {Button, TextInput} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './form.style';

export interface FormProps {
  onChange(): Function;
  onSubmit(): Function;
  value: string;
}

export const Form: React.FC<FormProps> = ({onChange, onSubmit, value}) => {
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        clearButtonMode="always"
        style={styles.input}
        autoCorrect={false}
        defaultValue={'comment'}
        onChangeText={event => onChange(event)}
        value={value}
      />
      <Button
        title={'submit'}
        disabled={value.length == 0}
        onPress={onSubmit}
      />
    </SafeAreaView>
  );
};
