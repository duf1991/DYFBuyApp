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
    ScrollView
} from 'react-native';

var CommonMyCell = require('./CommonMyCell');
var MiddleView = require('./MineMiddleView');
var HeaderView = require('./MineHeaderView');

export default class Mine extends Component {
    render() {
        return (
            <View style={styles.containerStyle}>
                {/* <Text style={styles.homeTextStyle}>我的嗷嗷</Text> */}
                <ScrollView contentContainerStyle={styles.scrollStyle}
                    showsVerticalScrollIndicator={false}
                    contentInset={{top:-400}}
                    contentOffset={{y:400}}
                >
                    {this.renderHeaderView()}
                    {this.renderMiddleView()}
                    <View style={styles.sectionStyle}>
                        <CommonMyCell
                            leftIcon='evaluate'
                            leftTitle='小杜钱包'
                            rightTitle='账户余额￥158'
                            rightIcon=''
                        >
                        </CommonMyCell>
                        <CommonMyCell
                            leftIcon='feedBack'
                            leftTitle='抵用券'
                            rightTitle='10张'
                            rightIcon=''
                        >
                        </CommonMyCell>
                    </View>

                    <View style={styles.sectionStyle}>
                        <CommonMyCell
                            leftIcon='health'
                            leftTitle='积分商城'
                        >
                        </CommonMyCell>
                    </View>

                    <View style={styles.sectionStyle}>
                        <CommonMyCell
                            leftIcon='law'
                            leftTitle='今日推荐'
                            rightIcon='new'
                        >
                        </CommonMyCell>
                    </View>

                    <View style={styles.sectionStyle}>
                        <CommonMyCell
                            leftIcon='oversight'
                            leftTitle='我要合作'
                            rightTitle='轻松开店，招财进宝'
                        >
                        </CommonMyCell>
                    </View>

                </ScrollView>
            </View >
        );
    }

    renderHeaderView() {
        return (
            <HeaderView></HeaderView>
        )
    }

    renderMiddleView() {
        return (
            <MiddleView></MiddleView>
        )
    }

}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e8e8e8',
    },
    sectionStyle: {
        marginTop: 20,
    },
    scrollStyle: {
        marginTop: 0,
    },
});

module.exports = Mine;

