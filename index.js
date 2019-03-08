/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
import App from './src';
import {name as appName} from './app.json';

// 定义状态栏
StatusBar.setBarStyle('light-content')
StatusBar.setBackgroundColor('transparent')
StatusBar.setTranslucent(true)
AppRegistry.registerComponent(appName, () => App);
