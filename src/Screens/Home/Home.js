import * as React from 'react';
import { View, Text,StyleSheet,Button,TouchableOpacity } from 'react-native';


function Home({navigation}) {

    return (
        <View style={styles.container}>
                <TouchableOpacity style={styles.barContainer} onPress={()=>navigation.navigate('Test')}>
                         <Text style={styles.title} >Title test #1</Text>
                         <Text style={styles.tag} >#tag1</Text>
                         <Text style={styles.text} >text</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.barContainer} onPress={()=>navigation.navigate('Test')}>
                     <Text style={styles.title} >Title test #2</Text>
                     <Text style={styles.tag} >#tag1</Text>
                     <Text style={styles.text} >text</Text>
                </TouchableOpacity>
 
                <View style={styles.footer} >
                     <Text style={styles.footerTitle} >Get to Know your ranking result</Text>
                     <View style={styles.footerButton} >
                        <Button onPress={()=>navigation.navigate('Result')} title="Check!" />
                     </View>
                </View>
              </View>
       );  
};

const styles = StyleSheet.create({
    container: {
        flex: 2,
        padding: 20,
        margin: 10,
      },
    barContainer: {
            flex: 0.3,
            borderWidth: 2,
            height: 100,
            margin: 10,
          },
    footer: {
       flex: 0.2,
       borderWidth: 2,
       margin: 10,
    },
    footerTitle: {
      padding: 10,
       textAlign: 'center',
       flex: 0.4,
       fontWeight: 'bold',
       color: 'black',
       fontSize: 20,
    },
  
    footerButton: {
         flex: 0.7,
      },
  
      title: {
        flex: 0.3,
        fontWeight: 'bold',
        color: 'black',
        fontSize: 20,
      },
      tag: {
        flex: 0.2,
        color: '#69d5ff',
        fontWeight: 'bold',
        fontSize: 15,
      },
      text: {
        flex: 0.2,
        color: 'black',
        fontSize: 15,
      },
    });

export default Home;