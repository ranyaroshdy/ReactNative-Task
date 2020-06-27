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
  const [task, setTask] = React.useState(false);
  return (
    <List.Accordion
      id="3"
      title="Third Task"
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
        Whenever category item on list is pressed it should navigate to product
        screen one screen you would create after this task
      </Paragraph>
      <HelperText>
        Don't forget to avoid any inline styles or inline functions in JSX
      </HelperText>
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
