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
    Switch,
    TouchableOpacity
} from 'react-native';

import VectorIcon from 'react-native-vector-icons/MaterialIcons';

var Dimensions = require('Dimensions');
var screenWidth = Dimensions.get('window').width;

var CommonCell = React.createClass({

    getDefaultProps() {
        return {
            title: '',
            isSwitch: false,
            detailText: '',
        }
    },

    getInitialState() {
        return {
            isOn: false,
        }
    },


    render() {
        return (
            <TouchableOpacity onPress={()=>{alert('点击cell!')}}> 
                <View style={styles.containerStyle}>
                    <Text>{this.props.title}</Text>
                    {this.renderRightView()}
                </View>
            </TouchableOpacity>
        );
    },

    renderRightView() {
        if (this.props.isSwitch) {
            return (
                <Switch value={this.state.isOn == true} onValueChange={() => { this.setState({ isOn: !this.state.isOn }) }}></Switch>
            )
        } else {
            return (
                <View style={styles.rightViewStyle}>
                    {this.props.detailText.length > 0 ? <Text>{this.props.detailText}</Text> : null}
                    <VectorIcon name='chevron-right' size={25} color={'gray'}></VectorIcon>
                </View>
            )
        }
    },

})

const styles = StyleSheet.create({
    containerStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        height: 44,
        width: screenWidth,
        paddingLeft: 10,
        paddingRight: 10,
        borderBottomColor: '#e8e8e8',
        borderBottomWidth: 0.5,
    },
    homeTextStyle: {
        fontSize: 20,
        marginLeft: 10,
    },
    rightViewStyle: {
        flexDirection: 'row',
        alignItems: 'center'
    }
});

module.exports = CommonCell;

