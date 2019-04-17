/**
 * @format
 */

import {AppRegistry} from 'react-native';
import setup from './js/setup';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => setup());

AppRegistry.runApplication(appName, {
  rootTag: document.getElementById("root")
});
