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
    ScrollView,
    Image,
    TouchableOpacity
} from 'react-native';

var shopData = require('./ShopCenterViewData.json')
var ShopTopCommonView = require('./ShopTopCommonView')

var ShopCenterView = React.createClass({

    getDefaultProps() {
        return {
            ShopCenterViewPush: null
        }
    },

    render() {
        return (
            <View style={styles.containerStyle}>
                <ShopTopCommonView data={shopData.topData}></ShopTopCommonView>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    {this.renderScrollItemView()}
                </ScrollView>
            </View>
        )
    },

    renderScrollItemView() {
        var bottomData = shopData.ads;
        var itemArr = [];
        for (var i = 0; i < bottomData.length; i++) {
            itemArr.push(
                <ShopCenterItemView
                    key={i}
                    itemData={bottomData[i]}
                    ShopCenterItemViewPush={(url)=>{this.shopCenterViewPush(url)}}
                >
                </ShopCenterItemView>
            )
        }
        return itemArr
    },

    shopCenterViewPush(url) {
        if(url) {
            this.props.ShopCenterViewPush(url)
        } else {
            return
        }
    }

})

var ShopCenterItemView = React.createClass({

    getDefaultProps() {
        return {
            itemData: null,
            ShopCenterItemViewPush: null
        }
    },

    render() {
        const { itemData } = this.props;

        return (
            <TouchableOpacity onPress={()=>{this.shopCenterItemViewPush(itemData.detailUrl)}}>
                <View style={styles.itemStyle}>
                    <Image source={{ uri: itemData.imgsrc }} style={styles.imageStyle}></Image>
                    <Text style={styles.subtitleStyle}>{itemData.subtitle}</Text>
                    <Text style={styles.titleStyle}>{itemData.title}</Text>
                </View>
            </TouchableOpacity>
        )

    },

    shopCenterItemViewPush(url) {
        if(url) {
            this.props.ShopCenterItemViewPush(url)
        } else {
            return
        }

    }

})

const styles = StyleSheet.create({
    containerStyle: {
        alignItems: 'center',
        backgroundColor: 'white',
        marginTop: 15,
    },
    itemStyle: {
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 10,
    },
    imageStyle: {
        width: 100,
        height: 80,
        borderRadius: 8,
    },
    subtitleStyle: {
        color: 'white',
        backgroundColor: 'orange',
        textAlign: 'center',
        position: 'absolute',
        padding: 2,
        left: 10,
        top: 60,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
    },
    titleStyle: {

    },

});

module.exports = ShopCenterView;

