import * as React from "react";
import { Text, View, Button } from "react-native";
import { Avatar, Colors } from "react-native-paper";
import { Card, CardItem, Body, Col } from 'native-base'
import { Left } from "native-base";
import { styles } from '../../styles/Styles';

export default function CartItem({ item, removeItem }: any) {
    return (
        <Card style={styles.CartItemContainer}>
            <CardItem>
                <Left>
                    <Body>
                        <Avatar.Image
                            accessibilityStates={[]}
                            source={{ uri: item.image }}
                        />
                        <Text style={styles.text}>{item.name}</Text>
                    </Body>
                    <Body>
                        <Col>
                            <Text><Text style={styles.text}>EGP </Text>{item.price}</Text>
                            <Text style={{ marginTop: 15 }}><Text style={styles.text}>Quantity: </Text>{item.quantity}</Text>
                        </Col>
                    </Body>
                    <Body>
                        <Col>
                            <Text style={styles.text}>Sub Total</Text>
                            <Text><Text style={styles.text}>EGP </Text>{item.price * item.quantity}</Text>
                            <View style={styles.cartItemButton}>
                                <Button title="Remove" color={Colors.deepPurple500} onPress={() => removeItem(item)} />
                            </View>
                        </Col>
                    </Body>
                </Left>
            </CardItem>
        </Card>
    )
}