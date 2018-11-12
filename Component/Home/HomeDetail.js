/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';


var HomeDetail = React.createClass({

    // getDefaultProps() {
    //     return {
    //         tips: null,
    //     }
    // },

    render() {
        return (
            <View style={styles.containerStyle}>
                <TouchableOpacity onPress={() => { this.popToHome() }}>
                    <Text style={styles.homeTextStyle}>{this.props.tips}</Text>
                </TouchableOpacity>
            </View>
        );
    },

    popToHome() {
        this.props.navigator.pop();
    }
})

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'orange',
    },
    homeTextStyle: {
        fontSize: 20,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

module.exports = HomeDetail;

