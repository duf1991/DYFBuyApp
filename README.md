# DYFBuyApp
我的第一个react-native学习成果，欢迎各位大佬star和issue!👏👏


# LPDSliderView

![CI Status](https://travis-ci.org/duf1991/LPDSliderView.svg?branch=master)
[![Version](https://img.shields.io/cocoapods/v/LPDSliderView.svg?style=flat)](http://cocoapods.org/pods/LPDSliderView)
[![License](https://img.shields.io/cocoapods/l/LPDSliderView.svg?style=flat)](http://cocoapods.org/pods/LPDSliderView)
[![Platform](https://img.shields.io/cocoapods/p/LPDSliderView.svg?style=flat)](http://cocoapods.org/pods/LPDSliderView)
[![Gitter](https://img.shields.io/gitter/room/nwjs/nw.js.svg)]()
![](https://img.shields.io/cocoapods/dt/LPDSliderView.svg)
![](https://img.shields.io/badge/language-ObjectiveC-orange.svg)



由于业务需求，需要在项目中加入滑动控件，但在网上搜索一番发现并没有比较合适的资源，要么过于陈旧，还是采用 touchBegan 等方法实现，过于繁琐且效果不佳，要么达不到业务要求，因此决定自己定制一个滑动控件。

## 预览

![gif](https://user-images.githubusercontent.com/20440035/32892241-87152042-cb10-11e7-91e6-8f4d7c6fb0ab.gif)

可以看到，我们可以自定义 LPDSliderView 的 frame，color，边框，文本的属性，以及可以通过 LPDSliderViewDelegate 中的 sliderValueChanged 和 sliderValueChangeEnded 去随时监听滑块的位置，以便完成相应的业务逻辑。

第一次发布开源库，若发现有误或者建议，欢迎 issue，谢谢～

## 示例

1. 利用 `git clone` 命令下载本仓库；
2. 利用 cd 命令切换到 Example 目录下，执行 `pod install` 命令；
3. 随后打开 `LPDSliderView.xcworkspace` 编译即可。

或执行以下命令：

```bash
git clone git@github.com:duf1991/LPDSliderView.git; cd LPDSliderView/Example; pod install; open LPDSliderView.xcworkspace
```

## 需求

XCode 9.0+

## 安装

LPDSliderView 可以通过 [CocoaPods](http://cocoapods.org) 进行获取。只需要在你的 Podfile 中添加如下代码就能实现引入：

```
pod "LPDSliderView"
```

## 使用

```
// 初始化 frame 以及滑块宽度，滑块图片
_sliderView = [[LPDSliderView alloc] initWithFrame:CGRectMake(40, 100, 300, 80) withHandleWith:80 withHandleImage:[UIImage imageNamed:@"icon_arrow_slide"]];
// [_sliderView.layer setBorderWidth:0.0];//可以设置是否显示边框
// 设置背景颜色，滑块颜色，滑块左部view颜色，整个边框颜色
[_sliderView setColorsForBackground:[UIColor grayColor] foreground:[UIColor blueColor] handle:[UIColor redColor] border:nil];
_sliderView.delegate = self;
// 设置文本的相关属性
_sliderView.label.text = @"确认到店";
_sliderView.label.font = [UIFont systemFontOfSize:25];
_sliderView.label.textColor = [UIColor whiteColor];
[self.view addSubview:_sliderView];

#pragma mark -- LPDSliderView代理方法
// 随时监听滑块的滑动位置
- (void)sliderValueChanged:(LPDSliderView *)sender {
    NSLog(@"滑块位置：%f",sender.value);
}
// 监听滑动结束时滑块的位置
- (void)sliderValueChangeEnded:(LPDSliderView *)sender {
    if(_sliderView.value == 1){
        NSLog(@"欧耶！");
    }
}
```

## 作者

Du Yingfeng, yingfeng.du02@ele.me

## 协议

LPDSliderView 基于 MIT 协议进行分发和使用，更多信息参见协议文件。
