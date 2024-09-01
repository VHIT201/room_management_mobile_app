import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Toast from 'react-native-toast-message';
import generalStyles from './src/styles/generalStyles';
import AppNavigation from './src/navigation/AppNavigation';
import i18next from './src/language/i18n'
export default function App() {
  return (
    <SafeAreaView style={[generalStyles.container, ]}>
        <StatusBar backgroundColor={'transparent'} translucent barStyle={'dark-content'} />
        <AppNavigation/>
        <Toast />
    </SafeAreaView>
  );
}


