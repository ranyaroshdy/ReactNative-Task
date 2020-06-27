import * as React from "react";
import { StyleSheet, View, Linking } from "react-native";
import {
  Surface,
  List,
  Text,
  useTheme,
  Button,
  Colors,
} from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import FirstTask from "../components/Task/FirstTask";
import Welcome from "../components/Task/Welcome";
import SecondTask from "../components/Task/SecondTask";
import ThirdTask from "../components/Task/ThirdTask";
import FourthTask from "../components/Task/FourthTask";
import FifthTask from "../components/Task/FifthTask";
import SixthTask from "../components/Task/SixthTask";

export default function TabOneScreen() {
  const [id, setId] = React.useState<string | number>("0");

  return (
    <ScrollView style={styles.container}>
      <List.AccordionGroup
        expandedId={id}
        onAccordionPress={(__id) =>
          setId((_id) => (_id === __id ? "-1" : __id))
        }
      >
        <Welcome />
        <FirstTask />
        <SecondTask />
        <ThirdTask />
        <FourthTask />
        <FifthTask />
        <SixthTask />
      </List.AccordionGroup>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
