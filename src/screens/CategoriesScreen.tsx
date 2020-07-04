import * as React from "react";
import { List, Avatar } from "react-native-paper";

import db from "../../db";
import { FlatList } from "react-native-gesture-handler";

export default function TabTwoScreen({ navigation }: any) {
  const [data, setData] = React.useState<any>([]);

  const getData = React.useCallback(async () => {
    const snapshot = await db.collection("category").get();
    setData(snapshot.docs.map((doc) => {
      var obj = doc.data();
      obj.id = doc.id;
      return (
        obj
      )
    }));
  }, []);

  React.useEffect(() => {
    getData();
  }, [getData]);

  return (
    <FlatList
      data={data}
      renderItem={({ item }: { item: any }) => (
        <List.Item
          key={item.id}
          title={item.name}
          accessibilityStates={[]}
          left={(props) => (
            <Avatar.Image
              {...props}
              accessibilityStates={[]}
              source={{ uri: item.image }}
            />
          )}
          onPress={() => { navigation.navigate('Product', { id: item.id }) }}
          right={(props) => <List.Icon {...props} icon="chevron-right" />}
        />
      )}
      keyExtractor={item => item.id}
    />
  );
}
