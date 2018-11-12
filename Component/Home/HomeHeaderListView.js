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
    TouchableOpacity,
    Image,
} from 'react-native';

var Dimensions = require('Dimensions');
var sWidth = Dimensions.get('window').width;
var marginLeft = 15;
var marginTop = 15;
var scale = sWidth/375;

var HomeHeaderListView = React.createClass({

    getDefaultProps() {
        return {
            listData: [],
        }
    },

    getInitialState() {
        var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        return {
            dataSource: ds.cloneWithRows(this.props.listData),
        }
    },

    render() {
        return (
            <ListView
                contentContainerStyle={styles.containerStyle}
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
                scrollEnabled={false}
            >
            </ListView>
        );
    },

    renderRow(rowData) {
        return (
            <TouchableOpacity activeOpacity={0.5} onPress={() => { alert('你好杜映峰!') }}>
                <View style={styles.itemView}>
                    <Image style={styles.imageStyle} source={{ uri: rowData.image }}></Image>
                    <Text style={styles.titleStyle} numberOfLines={1}>{rowData.title}</Text>
                </View>
            </TouchableOpacity>

        )
    }

})

const styles = StyleSheet.create({
    containerStyle: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: sWidth,
    },
    itemView: {
        width: (sWidth - marginLeft * 6) / 5,
        height: (sWidth - marginLeft * 6) / 5 + 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: marginTop,
        marginLeft: marginLeft,
        // backgroundColor: 'red'
    },
    imageStyle: {
        width: (sWidth - marginLeft * 6) / 5 - 10,
        height: (sWidth - marginLeft * 6) / 5 - 10,
        marginBottom: 5,
    },
    titleStyle: {
        width: (sWidth - marginLeft * 6) / 5,
        textAlign: 'center',
        fontSize: 13*scale
    },



});

module.exports = HomeHeaderListView;

