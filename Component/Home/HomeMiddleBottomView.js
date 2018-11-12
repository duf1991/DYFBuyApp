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

var middleBottomData = require('./HomeMiddleBottomData.json')
var Dimensions = require('Dimensions');
var sWidth = Dimensions.get('window').width;

var HomeMiddleBottomView = React.createClass({

    getDefaultProps() {
        return {
            middleBottomData: middleBottomData,
            MiddleBottomPush: null,
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
                {this.renderTopView()}
                <View style={styles.bottomStyle}>
                    {this.renderBottomView()}
                </View>
            </View>
        );
    },

    renderTopView() {

        const { middleBottomData } = this.props;
        var data = middleBottomData.topData;

        return (
            <View style={styles.topStyle}>
                <View style={styles.leftStyle}>
                    <Text style={{ color: data.titlecolor, fontSize: 18 }}>{data.title}</Text>
                    <Text style={{ color: 'gray', fontSize: 13 }}>{data.subtitle}</Text>
                </View>
                <Image source={{ uri: data.image }} style={{ width: 50, height: 50, position: 'absolute', right: 5 }}></Image>
            </View>
        )
    },

    renderBottomView() {

        const { middleBottomData } = this.props;
        var data = middleBottomData.bottomData;

        var itemArr = [];

        for (var i = 0; i < data.length; i++) {
            itemArr.push(
                <MiddleCommonView
                    key={i}
                    data={data[i]}
                    CommonViewPush={(title)=>{this.middleBottomViewPush(title)}}
                >
                </MiddleCommonView>
            )
        }

        return itemArr;
    },

    middleBottomViewPush(title) {
        if(title) {
            this.props.MiddleBottomPush(title)
        } else {
            return
        }
    }
})

const styles = StyleSheet.create({
    containerStyle: {
        marginTop: 15,
    },
    topStyle: {
        flexDirection: 'row',
        // justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'white',
        width: sWidth,
        height: 80,
        marginBottom: 1,
        marginRight: 1,
    },
    leftStyle: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginLeft: 5,
    },
    bottomStyle: {
        marginTop: 1,
        flexDirection: 'row',
        flexWrap: 'wrap', 
        width: sWidth,
    },

});

module.exports = HomeMiddleBottomView;

