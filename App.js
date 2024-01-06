import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import React from 'react'

export default function App() {
  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <View style={{padding: 16, backgroundColor:"green"}}>
          <Text>Search</Text>
        </View>
        <View style={{padding: 16, backgroundColor:"blue", flex:1}}>
          <Text>List</Text>
        </View>
      </SafeAreaView>
      <StatusBar style='auto'/>
    </>
  );
}

const styles = StyleSheet.create({

});
