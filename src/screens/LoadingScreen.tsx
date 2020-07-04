import * as React from "react";
import { View, ActivityIndicator } from "react-native";
import { Colors } from "react-native-paper";
import { styles } from '../styles/Styles'

export default function LoadingScreen() {
    return (
        <View style={styles.loaderContainer}>
            <ActivityIndicator size='large' color={Colors.deepPurple500} />
        </View >
    )
}