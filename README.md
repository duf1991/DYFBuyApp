# DYFBuyApp
我的第一个react-native学习成果，欢迎各位大佬star和issue!👏👏

![CI Status](https://travis-ci.org/duf1991/LPDSliderView.svg?branch=master)
[![Gitter](https://img.shields.io/gitter/room/nwjs/nw.js.svg)]()
![](https://img.shields.io/badge/language-javaScript-orange.svg)

这个是我从零开始学习react-native的一个学习记录过程，简单易懂，但涵盖功能全面，基本可以算是一个比较完整的电商app了，希望能够给react-native的初学者一些帮助。因为公司刚接手一个新的RN项目，而本人对于RN等跨平台完全没有接触过，甚至没有任何react等前端基础，html,css,javascript也是从未接触，但一直对这方面比较感兴趣，因此正好趁此机会学习了一把，感觉很有成就感，找到了曾经那种从0到1的掌握技能的感觉,整个过程大概顶多一个月时间。虽然RN现在可能没有以前那么火热，但是其跨平台思想还是很值得学习的，比如google新出的flutter其中很多思想与RN大同小异，例如其组件的state控制页面渲染机制等。当然这个项目还有很多功能可以后续慢慢完善的地方。


## 预览

![RN电商app](https://i.makeagif.com/media/11-12-2018/jZsfKw.gif)

上面是整个app的基本效果，大家简单感受一下～


## 示例

1. 利用 `git clone` 命令下载本仓库；
2. 利用 cd 命令切换到 iOS工程 目录下（即podfile上一级目录），执行 `pod install` 命令；利用cd 命令切换到 RN工程目录下（即package.json上一级目录），执行`npm install`命令
3. 随后在RN工程目录下执行`react-native run-ios`或者 打开 `LPDSliderView.xcworkspace` 编译即可。

或执行以下命令：

```bash
git clone git@github.com:duf1991/LPDSliderView.git; cd LPDSliderView/Example; pod install; open LPDSliderView.xcworkspace
```

## 需求

XCode 9.0+

## 安装

```
DYFBuyApp
```

## 使用

```
主要结构如下
var Main = React.createClass({
    getInitialState() {
        return {
            selectedTab: 'home'
        }
    },

    render() {
        return (
            <TabNavigator tabBarStyle={styles.tabBarStyle}>
                {/* --首页-- */}
                {this.renderTabNavigatorItem('首页','account-balance','account-balance','home', '首页', Home)}
                {/* --商家-- */}
                {this.renderTabNavigatorItem('商家','store','store','shop', '商家', Shop)}
                {/* --我的-- */}
                {this.renderTabNavigatorItem('我的','account-circle','account-circle','mine', '我的', Mine)}
                {/* --更多-- */}
                {this.renderTabNavigatorItem('更多','settings','settings','more', '更多', More)}
            </TabNavigator>

        )

    },

    renderTabNavigatorItem(title, iconName, selectedIconName, selectedTab, componentName, component) {
        return (
            <TabNavigator.Item
                title={title}
                renderIcon={() => <VectorIcon name={iconName} size={25} color={'gray'}></VectorIcon>}
                renderSelectedIcon={() => <VectorIcon name={selectedIconName} size={25} color={'orange'}></VectorIcon>}
                onPress={() => { this.setState({ selectedTab: selectedTab }) }}
                selected={this.state.selectedTab === selectedTab}
                titleStyle={styles.titleStyle}
                selectedTitleStyle={styles.selectedStyle}
            >
                {/* <Home></Home> */}
                <Navigator
                    initialRoute={{ name: componentName, component: component }}
                    configureScene={(route) => {
                        return Navigator.SceneConfigs.PushFromRight;
                    }}
                    renderScene={(route, navigator) => {
                        let Component = route.component;
                        return <Component {...route.params} navigator={navigator} />
                    }}
                >
                </Navigator>

            </TabNavigator.Item>

        )

    }
```

## 作者

Du Yingfeng, yingfeng.du02@ele.me

## 协议

DYFBuyApp 基于 MIT 协议进行分发和使用，更多信息参见协议文件。
