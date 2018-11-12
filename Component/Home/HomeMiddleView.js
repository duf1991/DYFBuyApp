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
    Image
} from 'react-native';

import MiddleCommonView from './MiddleCommonView'

var middleData = require('./HomeMiddleData.json')

var Dimensions = require('Dimensions');
var sWidth = Dimensions.get('window').width;

var HomeMiddleView = React.createClass({

    getDefaultProps() {
        return {
            middleData: middleData,
            MiddleViewPush: null,
        }
    },

    getInitialState() {
        return {
            currentPage: 0,
        }
    },

    render() {
        return (
            <View style={styles.containerStyle}>
                {this.renderLeftView()}
                <View style={styles.rightViewStyle}>
                    {this.renderRightView()}
                </View>
            </View>
        );
    },

    renderLeftView() {
        const { middleData } = this.props;
        var leftData = middleData.leftData;

        return (
            <View style={styles.leftViewStyle}>
                <Image style={{ width: 150, height: 50 , marginBottom: 5}} source={{ uri: leftData.image1 }}></Image>
                <Image style={{ width: 150, height: 50 }} source={{ uri: leftData.image2 }}></Image>
                {/* <Image style={{ width: 100, height: 50, resizeMode: 'contain' }} source={{ uri: leftData.image1 }}></Image>
                <Image style={{ width: 100, height: 50, resizeMode: 'contain' }} source={{ uri: leftData.image2 }}></Image> */}
                <Text style={{ color: 'gray', marginTop: 5 }}>{leftData.title}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Text>{`¥${leftData.price}`}</Text>
                    <Text style={{ backgroundColor: 'yellow', color: 'orange' }}>{leftData.tips}</Text>
                </View>
            </View>
        )

    },

    renderRightView() {
        const { middleData } = this.props;
        var rightData = middleData.rightData;

        var itemArr = [];
        for (var i = 0; i < rightData.length; i++) {
            var data = rightData[i]

            itemArr.push(
                <MiddleCommonView
                    key={i}
                    data={data}
                    CommonViewPush={(title) => { this.middleViewPush(title) }}
                >
                </MiddleCommonView>
            )
        }
        return itemArr;

    },

    middleViewPush(title) {
        if (title) {
            this.props.MiddleViewPush(title)
        } else {
            return
        }
    }
})

const styles = StyleSheet.create({
    containerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,
        width: sWidth,
        height: 161,
    },
    leftViewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        width: (sWidth - 1) / 2,
        height: 161,
        marginRight: 1,
    },
    rightViewStyle: {

    }
});

module.exports = HomeMiddleView;

