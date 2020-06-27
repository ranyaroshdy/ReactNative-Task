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
      id="6"
      title="Sixth Task"
      description="PLUS"
      descriptionStyle={{ color: Colors.red800 }}
    >
      <View style={{ paddingHorizontal: 25, marginBottom: 10 }}>
        <Paragraph>
          Here you can refactor file structure to make the project more scalable
          like: 1. group all source code that you've written in one directory
          called src 2. group all styles in one place 3. group all interfaces in
          one place 4. differ all navigation stacks and navigator in files then
          group then in one place under src
        </Paragraph>
        <HelperText>always remember you can ask for help</HelperText>
      </View>
    </List.Accordion>
  );
};
