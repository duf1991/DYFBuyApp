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
    TouchableOpacity,
    ScrollView
} from 'react-native';

import HomeHeaderListView from './HomeHeaderListView'

var Dimensions = require('Dimensions');
var sWidth = Dimensions.get('window').width;
var headerData = require('./HeaderViewData.json');

var HomeHeaderView = React.createClass({

    getDefaultProps() {
        return {
            duration: 1000,
            lunboData: [],
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
                <ScrollView contentContainerStyle={styles.scrollViewStyle}
                    ref={'scrollView'}
                    horizontal={true}
                    // showsHorizontalScrollIndicator={false}
                    pagingEnabled={true}
                    onMomentumScrollEnd={(e) => { this.updateCurrentPage(e) }}
                    showsHorizontalScrollIndicator={false}
                >
                    {this.renderScrollItem()}
                </ScrollView>
                <View style={styles.dotViewStyle}>
                    {this.getAllDots()}
                </View>
            </View>
        );
    },

    renderScrollItem() {
        var arr = [];
        for (var i = 0; i < headerData.length; i++) {
            var data = headerData[i];
            arr.push(
                <HomeHeaderListView
                    key={i}
                    listData={data}
                >
                </HomeHeaderListView>
            )
        }
        return arr;
    },

    getAllDots() {
        var dotArr = [];
        var style;
        for (var i = 0; i < headerData.length; i++) {
            style = (i === this.state.currentPage) ? { color: 'orange' } : { color: 'gray' };
            dotArr.push(
                <Text key={i} style={[{ fontSize: 25 }, style]}>&bull;</Text>
            )
        }
        return dotArr;
    },

    updateCurrentPage(e) {
        var offset = e.nativeEvent.contentOffset.x;
        var page = Math.floor(offset / sWidth);
        this.setState({
            currentPage: page,
        })

    },



})


const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: '#FFFFFF',
        width: sWidth,
    },
    homeTextStyle: {
        fontSize: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    scrollViewStyle: {

    },
    dotViewStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: sWidth,
        height: 30,
        // position: 'absolute',
        // bottom: 0,
        // backgroundColor: 'green',
    }
});

module.exports = HomeHeaderView;

