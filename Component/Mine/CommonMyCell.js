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
var screenWidth = Dimensions.get('window').width;

var CommonMyCell = React.createClass({
    getDefaultProps() {
        return {
            leftIcon: '',
            leftTitle: '',
            rightTitle: '',
            rightIcon: '',
        }
    },

    getInitialState() {
        return {

        }
    },


    render() {
        return (
            <TouchableOpacity onPress={() => { alert('点击cell!') }}>
                <View style={styles.containerStyle}>
                    <View style={styles.leftViewStyle}>
                        <Image source={{ uri: this.props.leftIcon }} style={styles.leftIconStyle}></Image>
                        <Text>{this.props.leftTitle}</Text>
                    </View>
                    {this.renderRightView()}
                </View>
            </TouchableOpacity>
        )
    },

    renderRightView() {
        return (
            <View style={styles.rightViewStyle}>
                {this.renderDetailView()}
                <VectorIcon name='chevron-right' size={25} color={'gray'}></VectorIcon>
            </View>

        )

    },

    renderDetailView() {
        if (this.props.rightIcon.length > 0) {
            return (
                <View style={styles.newStyle}>
                    <Text style={{fontSize:8,color:'white'}}>NEW</Text>
                </View>
                // <Image source={{ uri: this.props.rightIcon }} style={styles.rightIconStyle}></Image>
            )
        } else {
            return (
                <Text>{this.props.rightTitle}</Text>
            )
        }

    }


});

const styles = StyleSheet.create({
    containerStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        width: screenWidth,
        height: 44,
        borderBottomColor: '#e8e8e8',
        borderBottomWidth: 0.5,
    },
    leftViewStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 5,
    },
    leftIconStyle: {
        width: 24,
        height: 24,
        marginRight: 5,
    },
    rightViewStyle: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rightIconStyle: {
        width: 24,
        height: 24,
    },
    newStyle: {
        // width: 30,
        // height: 24,
        borderRadius: 18,
        backgroundColor: 'red',
        paddingLeft: 3,
        paddingRight: 3,
        paddingTop: 1,
        paddingBottom: 1,
    }
});

module.exports = CommonMyCell;

