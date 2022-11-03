/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import Index from './src';
import { store } from './src/app/store'
import { Provider } from 'react-redux'


const App = () => {


  return (
  
    <SafeAreaView style={{ flex: 1 }}>
   <Provider store={store}>
   
        <Index/>
     
        </Provider>
    </SafeAreaView>

  );
};


export default App;
