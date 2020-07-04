import { NavigationContainer, DefaultTheme, BaseRouter, NavigationHelpersContext } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { DefaultTheme as PaperTheme } from "react-native-paper";
import * as React from "react";

import NotFoundScreen from "../../screens/NotFoundScreen";
import ProductsScreen from "../screens/product/ProductsScreen";
import CartScreen from "../screens/cart/CartScreen";
import { RootStackParamList, CartParamList } from '../../types';
import BottomTabNavigator from "./BottomTabNavigator";
import LinkingConfiguration from "./LinkingConfiguration";
import {
  ProductParamList
} from "../../types";

import { Appbar } from "react-native-paper";


export default function Navigation() {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={{
        ...DefaultTheme,
        colors: { ...DefaultTheme.colors, primary: PaperTheme.colors.primary },
      }}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

const ProductStack = createStackNavigator<ProductParamList>();
function ProductNavigator({ route, navigation }: any) {
  return (
    <ProductStack.Navigator>
      <ProductStack.Screen
        name="ProductScreen"
        component={ProductsScreen}
        initialParams={{ id: route.params.id }}
        options={{
          header: () => (
            <Appbar.Header accessibilityStates>
              <Appbar.Content accessibilityStates title="Product" />
              <Appbar.Action accessibilityStates icon="shopping-cart" onPress={() => { navigation.navigate('Cart') }} />
            </Appbar.Header>
          ),
        }}
      />
      {(props: any) => <ProductsScreen {...props} id={route.params.id} />}

    </ProductStack.Navigator>
  );
}

const CartStack = createStackNavigator<CartParamList>();
function CartNavigator({ navigation }: any) {
  return (
    <CartStack.Navigator>
      <CartStack.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          header: () => (
            <Appbar.Header accessibilityStates>
              <Appbar.Content accessibilityStates title="Cart" />
              <Appbar.Action accessibilityStates icon="home" onPress={() => { navigation.navigate('HomeTab') }} />
            </Appbar.Header>
          ),
        }}
      />
    </CartStack.Navigator>
  );
}

const Stack = createStackNavigator<RootStackParamList>();
function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Root" component={BottomTabNavigator} />
      <Stack.Screen name="Product" component={ProductNavigator} />
      <Stack.Screen name="Cart" component={CartNavigator} />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
    </Stack.Navigator>
  );
}
