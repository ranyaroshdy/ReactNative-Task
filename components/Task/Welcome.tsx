import React from "react";
import { List, Colors, Text } from "react-native-paper";
import { Linking } from "react-native";

export default () => {
  return (
    <List.Accordion
      id="0"
      titleNumberOfLines={2}
      title="Welcome to Expandcart React Native Mobile App Interview"
    >
      <List.Section accessibilityStates>
        <List.Subheader accessibilityStates>Info</List.Subheader>
        <List.Item
          accessibilityStates
          left={(props) => <List.Icon {...props} icon="help-circle" />}
          title="Ask for help it's okay"
        />
        <Text accessibilityStates style={{ textAlign: "center" }}>
          {" "}
          <Text
            accessibilityStates
            selectable
            onPress={() =>
              Linking.openURL("mailto:muhammad.saeed@expandcart.com")
            }
            style={{
              fontFamily: "monospace",
              fontSize: 14,
              color: Colors.blueA200,
            }}
          >
            muhammad.saeed@expandcart.com
          </Text>{" "}
          or{" "}
          <Text
            accessibilityStates
            selectable
            onPress={() =>
              Linking.openURL("mailto:mohamed.darwesh@expandcart.com")
            }
            style={{
              fontFamily: "monospace",
              fontSize: 14,
              color: Colors.blueA200,
            }}
          >
            mohamed.darwesh@expandcart.com
          </Text>
        </Text>
        <List.Item
          accessibilityStates
          left={(props) => <List.Icon {...props} icon="calendar" />}
          title="One week long"
        />
      </List.Section>
      <List.Section accessibilityStates>
        <List.Subheader accessibilityStates>Tasks</List.Subheader>
        <List.Item accessibilityStates title="1. Firebase Database" />
        <List.Item
          accessibilityStates
          title="2. Make Categories Screen Better"
        />
        <List.Item
          accessibilityStates
          title="3. onPress Category => navigate to Product"
        />
        <List.Item accessibilityStates title="4. Create Product Screen" />
        <List.Item
          accessibilityStates
          title="5. Create Cart Screen"
          description="Plus"
        />
        <List.Item
          accessibilityStates
          title="6. Make the project well structured"
          description="Plus"
        />
      </List.Section>
    </List.Accordion>
  );
};
