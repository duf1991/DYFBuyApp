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

import VectorIcon from 'react-native-vector-icons/MaterialIcons';

var Dimensions = require('Dimensions');
var sWidth = Dimensions.get('window').width;

var ShopTopCommonView = React.createClass({

    getDefaultProps() {
        return {
            data: null,
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
            <TouchableOpacity onPress={()=>{alert('点击购物中心!')}}>
                <View style={styles.containerStyle}>
                    <View style={styles.leftStyle}>
                        <Image style={{ width: 20, height: 20, resizeMode: 'contain' }} source={{ uri: data.icon }}></Image>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 5 }}>{data.title}</Text>
                    </View>
                    <View style={styles.rightStyle}>
                        {data.shopNum ? <Text style={{ color: 'gray' }}>{`全部${data.shopNum}家`}</Text> : null}
                        <VectorIcon name="chevron-right" size={25} color={'gray'}></VectorIcon>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
})

const styles = StyleSheet.create({
    containerStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: sWidth,
        height: 45,
        borderBottomColor: '#F5F5F9',
        borderBottomWidth: 1,
    },
    leftStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5,
    },
    rightStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 5,
    }
});

module.exports = ShopTopCommonView;

