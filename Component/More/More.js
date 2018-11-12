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
    TouchableOpacity
} from 'react-native';

import VectorIcon from 'react-native-vector-icons/MaterialIcons';

var Dimensions = require('Dimensions');
var screenWidth = Dimensions.get('window').width;

var CommonCell = require('./CommonCell')

export default class More extends Component {
    render() {
        return (
            <View style={styles.containerStyle}>
                {this.renderNav()}
                <ScrollView contentContainerStyle={styles.scrollStyle}
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.sectionStyle}>
                        <CommonCell
                            title='扫一扫'
                        >
                        </CommonCell>
                    </View>
                    <View style={styles.sectionStyle}>
                        <CommonCell
                            title='省流量模式'
                            isSwitch={true}
                        >
                        </CommonCell>
                        <CommonCell
                            title='消息提醒'
                        >
                        </CommonCell>
                        <CommonCell
                            title='邀请好友使用峰团'
                        >
                        </CommonCell>
                        <CommonCell
                            title='清空缓存'
                            detailText='1.88M'
                        >
                        </CommonCell>
                    </View>
                    <View style={styles.sectionStyle}>
                        <CommonCell
                            title='问卷调查'
                        >
                        </CommonCell>
                        <CommonCell
                            title='支付帮助'
                        >
                        </CommonCell>
                        <CommonCell
                            title='网络诊断'
                        >
                        </CommonCell>
                        <CommonCell
                            title='关于峰团'
                        >
                        </CommonCell>
                        <CommonCell
                            title='我要应聘'
                        >
                        </CommonCell>
                    </View>
                    <View style={styles.sectionStyle}>
                        <CommonCell
                            title='精品应用'
                        >
                        </CommonCell>
                    </View>
                </ScrollView>
            </View>
        );
    }

    renderNav() {
        return (
            <View style={styles.navStyle}>
                <Text style={{ fontSize: 16, color: 'white' }}>更多</Text>
                <TouchableOpacity style={styles.rightStyle} onPress={() => { alert('点击更多') }}>
                    <VectorIcon name='settings' size={25} color={'white'}></VectorIcon>
                </TouchableOpacity>
            </View>

        )

    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#e8e8e8',
    },
    scrollStyle: {
        paddingBottom: 20,
    },
    sectionStyle: {
        marginTop: 20,
    },
    navStyle: {
        width: screenWidth,
        height: 64,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ec5915',
    },
    rightStyle: {
        position: 'absolute',
        right: 10,
    }
});

module.exports = More;

