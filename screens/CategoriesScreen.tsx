import * as React from "react";
import { StyleSheet } from "react-native";
import { List, Divider, Avatar } from "react-native-paper";

import db from "../db";
import { ScrollView } from "react-native-gesture-handler";

export default function TabTwoScreen() {
  const [data, setData] = React.useState<any>([]);

  const getData = React.useCallback(async () => {
    const snapshot = await db.collection("category").get();
    setData(snapshot.docs.map((doc) => doc.data()));
  }, []);

  React.useEffect(() => {
    getData();
  }, [getData]);

  return (
    <ScrollView style={{ flex: 1 }}>
      {data.map((item: any) => {
        return (
          <React.Fragment>
            <List.Item
              title={item.name}
              accessibilityStates={[]}
              left={(props) => (
                <Avatar.Image
                  {...props}
                  accessibilityStates={[]}
                  source={{ uri: item.image }}
                />
              )}
              right={(props) => <List.Icon {...props} icon="chevron-right" />}
            />
            <Divider accessibilityStates={[]} style={{ width: "100%" }} />
          </React.Fragment>
        );
      })}
    </ScrollView>
  );
}
