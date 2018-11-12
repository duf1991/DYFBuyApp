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

import VectorIcon from 'react-native-vector-icons/MaterialIcons';

var CommonMyCell = require('./CommonMyCell');
var MiddleData = require('./MiddleViewData.json')

var Dimensions = require('Dimensions');
var screenWidth = Dimensions.get('window').width;

var MineMiddleView = React.createClass({
    render() {
        return (
            <View style={styles.containerStyle}>
                <CommonMyCell
                    leftIcon='salary'
                    leftTitle='我的订单'
                    rightTitle='查看全部订单'
                >
                </CommonMyCell>
                <View style={styles.bottomStyle}>
                    {this.renderBottomView()}
                </View>
            </View>
        );
    },

    renderBottomView() {
        var itemsArr = [];
        for (var i = 0; i < MiddleData.length; i++) {
            var data = MiddleData[i];
            itemsArr.push(
                <MineMiddleItemView key={i} icon={data.icon} title={data.title}></MineMiddleItemView>
            )
        }
        return itemsArr;
    }
})

var MineMiddleItemView = React.createClass({

    getDefaultProps() {
        return {
            icon: '',
            title: '',
        }
    },

    render() {
        return (
            <View style={styles.bottomItemStyle}>
                <VectorIcon name={this.props.icon} size={25} color={'gray'}></VectorIcon>
                <Text>{this.props.title}</Text>
            </View>

        )

    }

})

const styles = StyleSheet.create({
    containerStyle: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',

    },
    bottomItemStyle: {
        width: screenWidth / 4,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

module.exports = MineMiddleView;

