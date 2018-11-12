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
    WebView,
    TouchableOpacity,
} from 'react-native';

import VectorIcon from 'react-native-vector-icons/MaterialIcons';

var Dimensions = require('Dimensions');
var sWidth = Dimensions.get('window').width;

var ShopCenterDetailView = React.createClass({

    getDefaultProps() {
        return {
            url: null,
        }
    },

    render() {
        return (
            <View style={styles.containerStyle}>
                {this.renderNav()}
                <WebView
                    source={{ uri: this.props.url }}
                    style={styles.webViewStyle}
                />
            </View>
        );
    },

    renderNav() {
        return (
            <View style={styles.navStyle}>
                <TouchableOpacity style={styles.leftStyle} onPress={() => { this.popToHome() }}>
                    <VectorIcon name='chevron-left' size={25} color={'white'}></VectorIcon>
                </TouchableOpacity>
                <Text style={{ fontSize: 16, color: 'white' }}>购物中心详情页</Text>
                <TouchableOpacity style={styles.rightStyle} onPress={() => { alert('点击更多') }}>
                    <VectorIcon name='settings' size={25} color={'white'}></VectorIcon>
                </TouchableOpacity>
            </View>

        )
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
        backgroundColor: 'white',
    },
    navStyle: {
        width: sWidth,
        height: 64,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ec5915',
    },
    leftStyle: {
        position: 'absolute',
        left: 10,
    },
    rightStyle: {
        position: 'absolute',
        right: 10,
    },
    webViewStyle: {
        flex: 1,
        width: sWidth,
        height: 300
    }
    

});

module.exports = ShopCenterDetailView;

