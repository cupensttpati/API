import React from 'react';
import {View, Text, Image, ScrollView, TextInput, StyleSheet} from 'react-native';
import LocalAPI from './LocalAPI';

function App () {
  return (
    <ScrollView>
     <LocalAPI />
    </ScrollView>
  );
};

export default App;