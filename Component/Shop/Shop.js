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
  View
} from 'react-native';

export default class Shop extends Component {
  render() {
    return (
        <View style={styles.containerStyle}>
            <Text style={styles.homeTextStyle}>商家嗷嗷</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
    },
    homeTextStyle: {
        fontSize: 20,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

module.exports = Shop;

