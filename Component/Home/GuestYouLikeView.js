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
    ListView,
    Image
} from 'react-native';

var guestData = require('./GuestYouLikeData.json')
var ShopTopCommonView = require('./ShopTopCommonView')

var Dimensions = require('Dimensions');
var sWidth = Dimensions.get('window').width;

var GuestYouLikeView = React.createClass({

    getDefaultProps() {
        return {
            guestData: guestData,
        }
    },

    getInitialState() {
        const { guestData } = this.props;
        var listData = guestData.data.poiInfos;

        var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        return {
            dataSource: ds.cloneWithRows(listData),
        }
    },

    render() {

        const { guestData } = this.props;

        return (
            <View style={styles.containerStyle}>
                <ShopTopCommonView
                    data={guestData.topData}
                >
                </ShopTopCommonView>
                <ListView
                    contentContainerStyle={styles.listContainerStyle}
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                >
                </ListView>
            </View>
        );
    },

    renderRow(data) {

        return (
            <View style={styles.cellStyle}>
                <Image source={{uri: data.frontImg}} style={styles.cellImageStyle}></Image>
                <View style={styles.cellRightStyle}>
                    <Text style={{fontSize: 14, fontWeight: 'bold'}}>{data.title}</Text>
                    <Text style={{fontSize: 10, color: 'gray', marginVertical: 5}}>{data.address}</Text>
                    <View style={styles.cellRightBottomStyle}>
                        <Text style={{fontSize: 10, color: 'gray'}}>{`人均¥${data.avgPrice}`}</Text>
                        <Text style={{fontSize: 10, color: 'orange', marginLeft: 100}}>{`${data.allCommentNum}条评论`}</Text>
                    </View>
                </View>
            </View>

        )


    }

})

const styles = StyleSheet.create({
    containerStyle: {
        marginTop: 15,
        backgroundColor: 'white',
    },
    listContainerStyle: {
        width: sWidth,
    },
    cellStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: '#F5F5F9',
        borderBottomWidth: 1,
        padding: 10,
    },
    cellImageStyle: {
        width: 100,
        height: 50,
    },
    cellRightStyle: {
        marginLeft: 10,
        alignItems: 'flex-start',
        marginRight: 5,
    },
    cellRightBottomStyle: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
        alignItems: 'center',
    },
    

});

module.exports = GuestYouLikeView;

