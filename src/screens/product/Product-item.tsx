import * as React from "react";
import { AsyncStorage, Image, Alert, View, Text, Button } from "react-native";
import { Colors } from 'react-native-paper';
import { Card, CardItem, Body } from 'native-base'
import { styles } from '../../styles/Styles';

const AddToCart = async (item: any) => {
    let GetCart = await AsyncStorage.getItem('cart');
    if (GetCart == null) {
        item.quantity = 1;
        await AsyncStorage.setItem('cart', JSON.stringify([item]));
    }
    else {
        let Cartlist = await AsyncStorage.getItem('cart');
        if (Cartlist != null) {
            let ParsedList = JSON.parse(Cartlist);
            let ItemFound = ParsedList.find((o: any) => o.id === item.id);
            if (ItemFound != null) {
                ItemFound.quantity += 1;
            }
            else {
                item.quantity = 1;
                ParsedList.push(item)
            }
            await AsyncStorage.setItem('cart', JSON.stringify(ParsedList));
        }
    }
    return (Alert.alert(
        "Success!",
        "Added to cart",
        [
            { text: "OK" }
        ],
        { cancelable: false }
    ));
}

export default function ProductItem({ data }: any) {
    return (
        <View style={styles.Container}>
            <Card style={styles.cardContainer} >
                <CardItem>
                    <Image style={styles.cardImage} source={{ uri: data.image }} />
                </CardItem>
                <CardItem>
                    <Body>
                        <Text style={styles.text}>{data.name}</Text>
                        <Text>{data.description}</Text>
                        <Text ><Text style={styles.text}>EGP</Text> {data.price}</Text>
                    </Body>
                </CardItem>
                <CardItem style={styles.cardFooter}>
                    <View style={styles.buttonContainer}>
                        <Button title="Add To Cart" color={Colors.deepPurple500} onPress={() => AddToCart(data)} />
                    </View>
                </CardItem>
            </ Card >
        </View>
    )
}
