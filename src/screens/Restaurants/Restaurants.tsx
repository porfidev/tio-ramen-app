import React from 'react';
import { Text, View } from 'react-native';
import { Button } from '@rneui/base';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { BottomTabNavigatorParamsList } from '../../navigation/types';

export default function Restaurants() {
  const navigation: NavigationProp<BottomTabNavigatorParamsList> = useNavigation();
  const goToRestaurant = () => {
    navigation.navigate('Agregar');
  };

  return (
    <View>
      <Text>Restaurants</Text>
      <Button title={'Agregar Restaurante'} onPress={goToRestaurant} />
    </View>
  );
}
