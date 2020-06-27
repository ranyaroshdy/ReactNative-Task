import { Feather } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import TabOneScreen from "../screens/HomeScreen";
import CategoriesScreen from "../screens/CategoriesScreen";
import {
  BottomTabParamList,
  HomeParamList,
  CategoriesParamList,
} from "../types";
import { Appbar } from "react-native-paper";

const BottomTab = createMaterialBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator initialRouteName="HomeTab">
      <BottomTab.Screen
        name="HomeTab"
        component={HomeNavigator}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Feather size={24} name="home" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="CategoriesTab"
        component={CategoriesNavigator}
        options={{
          tabBarLabel: "Categories",
          tabBarIcon: ({ color }) => (
            <Feather size={24} name="layers" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

const HomeStack = createStackNavigator<HomeParamList>();

function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={TabOneScreen}
        options={{
          header: () => (
            <Appbar.Header accessibilityStates>
              <Appbar.Content accessibilityStates title="Home" />
              <Appbar.Action accessibilityStates icon="shopping-cart" />
            </Appbar.Header>
          ),
        }}
      />
    </HomeStack.Navigator>
  );
}

const CategoriesStack = createStackNavigator<CategoriesParamList>();

function CategoriesNavigator() {
  return (
    <CategoriesStack.Navigator>
      <CategoriesStack.Screen
        name="CategoriesScreen"
        component={CategoriesScreen}
        options={{
          header: () => (
            <Appbar.Header accessibilityStates>
              <Appbar.Content accessibilityStates title="Categories" />
              <Appbar.Action accessibilityStates icon="shopping-cart" />
            </Appbar.Header>
          ),
        }}
      />
    </CategoriesStack.Navigator>
  );
}
