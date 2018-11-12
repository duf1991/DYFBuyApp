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
    Platform,
} from 'react-native';

import VectorIcon from 'react-native-vector-icons/MaterialIcons';

var Dimensions = require('Dimensions');
var screenWidth = Dimensions.get('window').width;

var itemsData = require('./HeaderViewData.json');

var MiddleHeaderView = React.createClass({
    getDefaultProps() {
        return {
            icon: 'image_lead_head',
            title: '小杜哥电商',
        }
    },

    render() {
        return (
            <View style={styles.containerStyle}>
                <View style={styles.topStyle}>
                    {this.renderLeftView()}
                    <VectorIcon name='chevron-right' size={25} color={'white'}></VectorIcon>
                </View>
                <View style={styles.bottomStyle}>
                    {this.renderAllItems()}
                </View>
            </View>
        );
    },

    renderLeftView() {
        return (
            <View style={styles.leftViewStyle}>
                <Image source={{ uri: this.props.icon }} style={styles.iconStyle}></Image>
                <Text style={styles.titleStyle}>{this.props.title}</Text>
                <View style={styles.tagStyle}>
                    <Text style={{ fontSize: 10, color: 'white' }}>V</Text>
                </View>
            </View>
        )
    },

    renderAllItems() {
        var itemsArr = [];
        for (var i = 0; i < itemsData.length; i++) {
            var data = itemsData[i];
            itemsArr.push(
                <HeaderItemView
                    key={i}
                    number={data.number}
                    title={data.title}
                >
                </HeaderItemView>
            )

        }
        return itemsArr;
    }

})

var HeaderItemView = React.createClass({

    getDefaultProps() {
        return {
            number: 0,
            title: '',
        }
    },

    render() {
        return (
            <View style={styles.itemStyle}>
                <Text style={styles.itemTextStyle}>{this.props.number}</Text>
                <Text style={styles.itemTextStyle}>{this.props.title}</Text>
            </View>

        )

    }



})

const styles = StyleSheet.create({
    containerStyle: {
        width: screenWidth,
        height: 550,
        alignItems: 'center',
        backgroundColor: '#ec5915',
    },
    titleStyle: {
        fontSize: 20,
        color: 'white',
    },
    iconStyle: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    tagStyle: {
        // width: 12,
        // height: 12,
        borderRadius: 10,
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 4,
        paddingRight: 4,
        paddingTop: 1,
        paddingBottom: 1,
    },
    leftViewStyle: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    itemStyle: {
        width: screenWidth / 3 + 1,
        height: 40,
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRightColor: '#e8e8e8',
        borderRightWidth: 0.5,
        backgroundColor: 'rgba(255,255,255,0.3)',
        paddingTop: 5,
        paddingBottom: 5,
    },
    itemTextStyle: {
        color: 'white'
    },
    topStyle: {
        width: screenWidth,
        height: 80,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        bottom: 40,
        // backgroundColor: 'green',
    },
    bottomStyle: {
        flexDirection: 'row',
        // justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
    }
});

module.exports = MiddleHeaderView;

