import {
  BottomTabNavigationOptions,
  BottomTabScreenProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import Restaurants from '../screens/Restaurants';
import Favorites from '../screens/Favorites';
import Ranking from '../screens/Ranking';
import Account from '../screens/Account';
import { Icon } from '@rneui/base';
import React from 'react';
import ScreenNames from './ScreenNames';
import { BottomTabNavigatorParamsList } from './types';

const ScreenTabIcons: { [key: string]: string } = {
  [ScreenNames.RESTAURANTS]: 'food',
  [ScreenNames.FAVORITES]: 'heart',
  [ScreenNames.RANKING]: 'chart-areaspline',
  [ScreenNames.ACCOUNT]: 'account',
};

const Tab = createBottomTabNavigator<BottomTabNavigatorParamsList>();

export function MainNavigation() {
  return (
    <Tab.Navigator screenOptions={getScreenOptions}>
      <Tab.Screen name={ScreenNames.RESTAURANTS} component={Restaurants} />
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
  };
};
