import React from 'react';
import {StatusBar} from 'react-native';
import CodePush from 'react-native-code-push';

import Routes from './routes';

const App = () => (
   <>
      <StatusBar backgroundColor="#24292e" barStyle="light-content" />
      <Routes />
   </>
);

export default CodePush({
   checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
})(App);
