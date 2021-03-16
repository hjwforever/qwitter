[English](README.md) | 简体中文

# 1. Qwitter (qwitter)

基于 `Vue`, `Firebase`, `Quasar` 创建的跨平台仿 Twitter 界面应用
可导出的项目成品:

- 单页面应用 —— SPA
- PC 端桌面应用程序 —— Electron
- 手机端 APP —— Cordova(Android/IOS)
- ...

## 1.1. 设置 Firebase

- 创建一个名为 Qwitter 的新 Firebase 项目
- 创建一个名为 Qwitter 的 Web 应用程序
- 从出现的代码示例中复制配置，并将其添加到 src /boot /firebase.js 相应位置
  - [**Option**] 将你的 apiKey 替换至`.env.sample`，并将`.env.sample`改名为`.env`
- 创建 Cloud Firestore 数据库---确认选择"Start in test mode"

## 1.2. 安装依赖项

```bash
npm install
```

## 1.3. Web 版 (SPA)

### 1.3.1. 开发模式

```bash
quasar dev
```

### 1.3.2. 生产模式

```bash
quasar build
```

## 1.4. 桌面版(Electron)

### 1.4.1. 开发模式

```bash
quasar dev -m electron
```

### 1.4.2. 生产模式

要针对不同的平台进行构建，请将“ quasar.conf.js”中的“ electron> packager> platform”设置
更改为“ win32”，“ darwin”，“ mas”或“ linux”

```bash
quasar build -m electron
```

## 1.5. iOS 版本(Cordova)

### 1.5.1. 全局安装 Cordova

```bash
npm install -g cordova
```

or

```bash
sudo npm install -g cordova
```

### 1.5.2. 安装 Xcode

[Install Xcode](https://developer.apple.com/download/more/)

### 1.5.3. 开发模式

```bash
quasar dev -m cordova -T ios
```

### 1.5.4. 在其他模拟器设备上启动

```bash
cd src-cordova
cordova run ios --list
cd ..
quasar dev -m cordova -T ios -e "iPhone-12, 14.3"
```

### 1.5.5. 生产模式

```bash
quasar build -m cordova -T ios
```

## 1.6. Android 版(Cordova)

### 1.6.1. 全局安装 Cordova

```bash
npm install -g cordova
```

or

```bash
sudo npm install -g cordova
```

### 1.6.2. 遵循 Quasar 网站上的所有步骤

[查看 Quasar 网站上的操作步骤](https://quasar.dev/quasar-cli/developing-cordova-apps/preparation#Android-setup)

### 1.6.3. 启动 Android 虚拟设备

Android Studio > Configure > AVD Manager > Launch an AVD

### 1.6.4. 开发模式

```bash
quasar dev -m cordova -T android
```

### 1.6.5. 生产模式

```bash
quasar build -m cordova -T android
```
