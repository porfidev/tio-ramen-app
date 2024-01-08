import {
  BottomTabNavigationOptions,
  BottomTabScreenProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import Favorites from '../screens/Favorites';
import Ranking from '../screens/Ranking';
import Account from '../screens/Account';
import { Icon } from '@rneui/base';
import React from 'react';
import ScreenNames from './ScreenNames';
import { BottomTabNavigatorParamsList } from './types';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddRestaurant from '../screens/Restaurants/AddRestaurant';
import Restaurants from '../screens/Restaurants/Restaurants';

const ScreenTabIcons: { [key: string]: string } = {
  [ScreenNames.RESTAURANTS]: 'food',
  [ScreenNames.FAVORITES]: 'heart',
  [ScreenNames.RANKING]: 'chart-areaspline',
  [ScreenNames.ACCOUNT]: 'account',
};

const Tab = createBottomTabNavigator<BottomTabNavigatorParamsList>();

const RestaurantStack = createNativeStackNavigator();

export function RestaurantNavigation() {
  return (
    <RestaurantStack.Navigator>
      <RestaurantStack.Screen
        name={'Home'}
        component={Restaurants}
        options={{ title: 'Lista Restaurantes' }}
      />
      <RestaurantStack.Screen
        name={'Agregar'}
        component={AddRestaurant}
        options={{ title: 'Agregar Restaurante' }}
      />
    </RestaurantStack.Navigator>
  );
}

export function MainNavigation() {
  return (
    <Tab.Navigator screenOptions={getScreenOptions}>
      <Tab.Screen name={ScreenNames.RESTAURANTS} component={RestaurantNavigation} />
      <Tab.Screen name={ScreenNames.FAVORITES} component={Favorites} />
      <Tab.Screen name={ScreenNames.RANKING} component={Ranking} />
      <Tab.Screen name={ScreenNames.ACCOUNT} component={Account} />
    </Tab.Navigator>
  );
}

const getScreenOptions = ({
  route,
}: BottomTabScreenProps<BottomTabNavigatorParamsList>): BottomTabNavigationOptions => {
  return {
    tabBarActiveTintColor: 'red',
    tabBarInactiveTintColor: 'blue',
    tabBarIcon: ({ color, size }: { color: string; size: number }) => (
      <Icon
        type={'material-community'}
        name={ScreenTabIcons[route.name]}
        color={color}
        size={size}
      />
    ),
    headerShown: false,
  };
};
