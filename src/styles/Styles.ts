import { StyleSheet } from 'react-native';
import { Colors } from "react-native-paper";
import Window from '../../constants/Layout'
const itemWidth = (Window.window.width - 20);
export const styles = StyleSheet.create({
    loaderContainer: {
        justifyContent: 'center',
        flex: 1
    },
    Container: {
        width: itemWidth,
        flex: 1
    },
    cardContainer: {
        width: 250,
        marginLeft: 56,
        height: 500,
        marginTop: 30
    },
    cardImage: {
        height: 300,
        flex: 1,
        width: itemWidth - 10
    },
    text: {
        fontWeight: 'bold'
    },
    cardFooter: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        width: 200,
        bottom: 20
    },
    cartText: {
        fontWeight: 'bold',
        textAlign: 'right',
        marginRight: 20,
        marginTop: 10,
        color: Colors.deepPurple500
    },
    cardButton: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    listMargin: {
        margin: 8
    },
    cartItemButton: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    CartItemContainer: {
        margin: 8
    }
})