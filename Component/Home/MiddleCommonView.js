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
    Image,
    TouchableOpacity
} from 'react-native';

var Dimensions = require('Dimensions');
var sWidth = Dimensions.get('window').width;

var MiddleCommonView = React.createClass({

    getDefaultProps() {
        return {
            data: null,
            CommonViewPush: null,
        }
    },

    getInitialState() {
        return {
            currentPage: 0,
        }
    },

    render() {

        const { data } = this.props;

        return (
            <TouchableOpacity activeOpacity={0.5} onPress={() => { this.clickedCommonView(data.title) }}>
                <View style={styles.containerStyle}>
                    <View style={styles.leftStyle}>
                        <Text style={{ color: data.titlecolor, fontSize: 18 }}>{data.title}</Text>
                        <Text style={{ color: 'gray', fontSize: 13 }}>{data.subtitle}</Text>
                    </View>
                    <Image source={{ uri: data.image }} style={{ width: 50, height: 50, position: 'absolute', right: 5 }}></Image>
                </View>
            </TouchableOpacity>
        );
    },

    clickedCommonView(title) {
        if(title) {
            this.props.CommonViewPush(title)
        } else {
            return
        }
    }

})

const styles = StyleSheet.create({
    containerStyle: {
        flexDirection: 'row',
        // justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'white',
        width: (sWidth - 2) / 2,
        height: 80,
        marginBottom: 1,
        marginRight: 1,
    },
    leftStyle: {
        marginLeft: 5,
        justifyContent: 'center',
        alignItems: 'flex-start'
    }
});

module.exports = MiddleCommonView;

