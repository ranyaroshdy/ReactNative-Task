import * as React from "react";
import { AsyncStorage, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { styles } from '../../styles/Styles';
import CartItem from "./Cart-item";

export default function CartScreen() {
    const [data, setData] = React.useState<any>([]);

    const getData = React.useCallback(async () => {
        let CartList = await AsyncStorage.getItem('cart');
        if (CartList != null) {
            let ParsedList = JSON.parse(CartList)
            setData(ParsedList);
        }
    }, []);

    React.useEffect(() => {
        getData();
    }, [getData]);

    const remove = async (item: any) => {
        let CartList = await AsyncStorage.getItem('cart');
        if (CartList != null) {
            let ParsedList = JSON.parse(CartList)
            let filteredList = ParsedList.filter((e: any) => e.id != item.id);
            await AsyncStorage.setItem('cart', JSON.stringify(filteredList));
            setData(filteredList)
        }
    }

    const calculateTotal = () => {
        return (data.reduce(function (acc: any, obj: any) { return acc + (obj.price * obj.quantity); }, 0)
        )
    }

    return (
        <View>
            <Text style={styles.cartText}>Total: EGP {calculateTotal()}</Text>
            <FlatList style={styles.listMargin}
                data={data}
                renderItem={({ item }) => <CartItem item={item} removeItem={remove} />}
                keyExtractor={(item: any) => {
                    return item.id
                }}
            />
        </View>
    )
}