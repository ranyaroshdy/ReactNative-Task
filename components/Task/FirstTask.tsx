import React from "react";
import { List, Colors, Button } from "react-native-paper";
import { View } from "react-native";

export default () => {
  const [firstTask, setFirstTask] = React.useState(false);
  return (
    <List.Accordion
      id="1"
      title="First Task"
      left={(props) => (
        <List.Icon
          {...props}
          icon={firstTask ? "check-circle" : "circle"}
          color={firstTask ? Colors.green400 : Colors.red300}
        />
      )}
    >
      <List.Item
        accessibilityStates
        title="1. You need to create firebase project"
      />
      <List.Item
        accessibilityStates
        title="2. You need to create firebase firestore"
      />
      <List.Item
        accessibilityStates
        titleNumberOfLines={2}
        title={'3. You need to create firestore collection named "category"'}
        description="Every document will have 2 fields (name, image)"
      />
      <List.Item
        accessibilityStates
        title={'4. You need to create firestore collection named "product"'}
        titleNumberOfLines={2}
        descriptionNumberOfLines={2}
        description="Every document will have 4 fields (description, price, name, image, categoryId => (reference type for category))"
      />
      <List.Item
        accessibilityStates
        title={"5. go to settings create web project then copy config paste it into firebase.ts"}
        titleNumberOfLines={2}
      />
      <View>
        <Button
          style={{ alignSelf: "center" }}
          accessibilityStates
          mode="outlined"
          labelStyle={{ textAlign: "center" }}
          onPress={() => setFirstTask((task) => !task)}
        >
          Done?
        </Button>
      </View>
    </List.Accordion>
  );
};
