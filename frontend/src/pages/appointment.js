import React from 'react';

import {WebView} from 'react-native-webview';

const Appointment = ({navigation}) => (
  <WebView source={{uri: 'https://burca.dev'}} />
);

Appointment.navigationOptions = ({navigation}) => ({
  title: navigation.state.params.product.clientName,
});

export default Appointment;
