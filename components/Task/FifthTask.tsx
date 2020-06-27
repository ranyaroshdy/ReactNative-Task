import React from "react";
import {
  List,
  Colors,
  Button,
  Paragraph,
  HelperText,
} from "react-native-paper";
import { View } from "react-native";

export default () => {
  return (
    <List.Accordion
      id="5"
      title="Fifth Task"
      description="PLUS"
      descriptionStyle={{ color: Colors.red800 }}
    >
      <View style={{ paddingHorizontal: 25, marginBottom: 10 }}>
        <Paragraph>
          You need to create a cart screen stack in "RootNavigator" has products
          when user press add to cart in product screen, you can update
          firestore database or you can added to local storage using
          AsyncStorage Module also any product can be removed from cart
        </Paragraph>
        <HelperText>always remember you can ask for help</HelperText>
      </View>
    </List.Accordion>
  );
};
