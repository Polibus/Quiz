import * as React from 'react';
import {View, Text,StyleSheet, Button } from 'react-native';


function Score({route, navigation}) {

    const { points,test } = route.params;
  return (
    <View style={styles.container}>
        <Text style={styles.tekst}>Zdobyłeś: {JSON.stringify(points)}/{JSON.stringify(test)}</Text>
        <View style={styles.footerButton} >
              <Button onPress={()=>navigation.navigate('Home')} title="End" />
        </View>
    </View>
  );
  }
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        margin: 100,

      },
    tekst: {
        flex: 1,
        fontWeight: 'bold',
        fontSize: 30,
        color: 'black'
    },
    footerButton: {
        flex: 1,
    }
    });

export default Score;