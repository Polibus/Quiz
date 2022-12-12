import * as React from 'react';
import { FlatList,  View,  StyleSheet, Text} from 'react-native';



const results = [
  {
  id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
  "nick": "asdf",
  "point": 18,
  "total": 20,
  "type": "test1",
  "date": "21-11-2018",
},
{
  id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bc',
"nick": "kadf",
"point": 15,
"total": 20,
"type": "test1",
"date": "18-11-2018",
},
];


const Item = ({nick, type, point, date }) => (

  <View style={styles.item}>
    <Text style={styles.table} >{nick}</Text>
    <Text style={styles.table} >{point}</Text>
    <Text style={styles.table} >{type}</Text>
    <Text style={styles.table} >{date}</Text>
  </View>
);



function ResultScreen({navigation}) {

  const renderItem = ({ item }) => (

     <Item nick={item.nick} point={item.point+"/"+item.total} type={item.type} date={item.date} />
   );



  return (
    <View style={{ flex: 1, flexDirection:'column', alignItems: 'center', justifyContent: 'center' }}>
    <View style={{    backgroundColor: 'white',
        padding: 20,
        flexDirection: 'row',
        height: 50,
        width: 400,}}>

         <Text style={styles.title} >Nick</Text>
         <Text style={styles.title} >Point</Text>
         <Text style={styles.title} >Type</Text>
         <Text style={styles.title} >Date</Text>
         </View>

         <FlatList
     data={results}
     renderItem={renderItem}
     keyExtractor={item => item.id}
   />
   </View>

  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    padding: 20,
    width: 400,
    height: 50,
    flex:3,
    flexDirection: 'row',

  },
  table: {
      flex: 1,
      backgroundColor: 'white',
      flexDirection: 'row',
      justifyContent: 'center',
      height: 60,
      fontSize: 15,
      fontWeight: 'bold'
  },

  title: {
      flex: 1,
      backgroundColor: 'white',
      flexDirection: 'column',
      justifyContent: 'center',
      height: 40,
      fontSize: 20,
      color: 'black',
      fontWeight: 'bold'
}
});


export default ResultScreen
