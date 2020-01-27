import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from './pages/Home';
import Profile from './pages/Profile';

const Routes = createAppContainer(
   createStackNavigator(
      {
         Home,
         Profile,
      },
      {
         headerLayoutPreset: 'center',
         headerBackTitleVisible: false,
         defaultNavigationOptions: {
            headerStyle: {
               backgroundColor: '#24292e',
            },
            headerTintColor: '#fff',
         },
      },
   ),
);

export default Routes;
