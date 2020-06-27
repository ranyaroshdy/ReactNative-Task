import React from "react";
import { List, Colors, Button, Paragraph } from "react-native-paper";
import { View } from "react-native";

export default () => {
  const [task, setTask] = React.useState(false);
  return (
    <List.Accordion
      id="2"
      title="Second Task"
      left={(props) => (
        <List.Icon
          {...props}
          icon={task ? "check-circle" : "circle"}
          color={task ? Colors.green400 : Colors.red300}
        />
      )}
      style={{ marginBottom: 10 }}
    >
      <Paragraph>
        Here you should make categories screen better it has some of performance
        issues and you should improve this
      </Paragraph>
      <View>
        <Button
          style={{ alignSelf: "center" }}
          accessibilityStates
          mode="outlined"
          labelStyle={{ textAlign: "center" }}
          onPress={() => setTask((task) => !task)}
        >
          Done?
        </Button>
      </View>
    </List.Accordion>
  );
};
