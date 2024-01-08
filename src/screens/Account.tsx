import React from 'react';
import { Text, View } from 'react-native';
import { Button } from '@rneui/base';
import ScreenNames from '../navigation/ScreenNames';
import { NavigationProp, useNavigation } from '@react-navigation/native';

export default function Account() {
  const navigation: NavigationProp<any> = useNavigation();

  const goToAddRestaurant = () => {
    navigation.navigate(ScreenNames.RESTAURANTS, { screen: 'Agregar' });
  };
  return (
    <View>
      <Text>Account s</Text>
      <Button title={'Agregar Restaurante'} onPress={goToAddRestaurant} />
    </View>
  );
}
