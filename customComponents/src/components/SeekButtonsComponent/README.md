## Forward and rewind component

Other Languages: [简体中文](https://github.com/xinyflove/AliyunPlayer_Web/blob/master/customComponents/src/components/SeekButtonsComponent/README.zh_CN.md)

Control video fast-forward and rewind by clicking the fast-forward and rewind buttons on the player control panel.

### Usage

Reference this component and add the following code to the player configuration:

```js
components: [{
  name: 'SeekButtonsComponent',
  type: AliPlayerComponent.SeekButtonsComponent,
  args: [{ step: 5 }]
}]
```

**After adding the fast-forward and rewind components, the fast-forward and rewind buttons will be displayed on the player control panel.**

