## 快进和快退组件

其他语言: [English](https://github.com/xinyflove/AliyunPlayer_Web/blob/master/customComponents/src/components/SeekButtonsComponent/README.md)

通过点击播放器控制面板上的快进快退按钮控制视频的快进和快退。

### 使用方法

引用当前组件, 播放器配置中添加如下代码:

```js
components: [{
  name: 'SeekButtonsComponent',
  type: AliPlayerComponent.SeekButtonsComponent,
  args: [{ step: 5 }]
}]
```

**添加快进和快退组件之后, 播放器控制面板上会显示快进和快退按钮**
