/**
 * @format
 */

import {AppRegistry,LogBox} from 'react-native';
import StackNavigator from './src/app_navigation/StackNavigator';
import {name as appName} from './app.json';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();
AppRegistry.registerComponent(appName, () => StackNavigator);
