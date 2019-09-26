import {createStackNavigator} from 'react-navigation';

import Main from './pages/main';
import Appointment from './pages/appointment';

export default createStackNavigator(
  {
    Main,
    Appointment,
  },
  {
    navigationOptions: {
      headerStyle: {backgroundColor: '#DA552F'},
      headerTintColor: '#FFF',
    },
  },
);
