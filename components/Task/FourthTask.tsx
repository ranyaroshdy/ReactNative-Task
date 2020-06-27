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
      id="4"
      title="Fourth Task"
      left={(props) => (
        <List.Icon
          {...props}
          icon={task ? "check-circle" : "circle"}
          color={task ? Colors.green400 : Colors.red300}
        />
      )}
    >
      <View style={{ marginBottom: 10 }}>
        <Paragraph>
          You need to create a product screen stack in "RootNavigator" has
          image, name, description and price, you get these data from firebase
          database that you have created in first screen. you get this product
          by category id you filter product collection by category id and get
          first product, then you displays it you can add loading screen to
          avoid any rendering issues
        </Paragraph>
        <HelperText>always remember you can ask for help</HelperText>
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
      </View>
    </List.Accordion>
  );
};
