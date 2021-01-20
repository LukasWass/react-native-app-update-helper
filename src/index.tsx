import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Dimensions,
    Modal
} from "react-native";

interface IProps { }

interface IState { }

export default class index extends Component<IProps, IState> {
    render() {
        return (
            <Modal
                visible={true}
                style={styles.modal}
            >
                <View style={styles.container}>

                </View>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    modal: {
        width: Dimensions.get("screen").width * 0.2,
        height: Dimensions.get("screen").height * 0.2,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.3)"
    },

    container: {
        flex: 1,
        padding: 30,
        backgroundColor: "white"
    }
});