# 初始化项目

初始化`ts`项目
```bash
npx create-expo-app -t expo-template-blank-typescript <project-name>
# 进入项目目录
cd <project-name>
```

启动项目

```bash
npx expo start
```

启动成功后，控制台能出现二维码

- iso 先在 app store 中安装 Expo Go，使用控制中心的扫码器扫描打开
- android 打不开 google play，首次需要用usb连接电脑（开启开发者模式，usb调试和允许usb安装），之后在控制台输入 a 回车，open android。会在手机上安装这个应用。之后就可以使用 Expo Go 扫码打开了。


# 打包

首先注册EAS账号，每个月免费打包30个。[EAS链接](https://expo.dev/)

之后全局安装`eas-cli`

```bash
npm install -g eas-cli
```

控制台登录，输入用户名和密码

```bash
eas login
```
相关文档  
https://docs.expo.dev/build/setup/


```bash
eas build -p android --profile preview
```
