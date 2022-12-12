import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { useEffect } from 'react';


const question = [{
    "question": "Kto zdobył złotą piłkę 2021",
    "answers": [
      {
        "content":  "Messi",
        "isCorrect": true
      },
      {
        "content":  "Lewandowski",
        "isCorrect": false
      },
      {
        "content":  "Ronaldo",
        "isCorrect": false
      },
      {
        "content":  "Maguire",
        "isCorrect": false
    },
  ]
},
]


function Test() {

  const [test, setTest] = React.useState([])
   const [questionNumber] = React.useState(0)

   useEffect(() => {
    setTest(question)
}, [])



  return (
        test.length > 0 ? (
               <View style={{ flex: 1 }}>
                   <View  style={styles.quest}>
                       <Text style={styles.text}>{test[questionNumber].question}</Text>
                   </View>

                   <TouchableHighlight style={styles.button}>
                       <Text style={styles.text_answer}>{test[questionNumber].answers[0].content}</Text>
                   </TouchableHighlight>

                   <TouchableHighlight style={styles.button}>
                       <Text style={styles.text_answer}>{test[questionNumber].answers[1].content}</Text>
                   </TouchableHighlight>

                   <TouchableHighlight style={styles.button}>
                       <Text style={styles.text_answer}>{test[questionNumber].answers[2].content}</Text>
                   </TouchableHighlight>

                   <TouchableHighlight style={styles.button}>
                       <Text style={styles.text_answer}>{test[questionNumber].answers[3].content}</Text>
                   </TouchableHighlight>
               </View>
           ) : <Text>Loading...</Text>

  );
}

const styles = StyleSheet.create({
  quest: {
      height: 200,
      borderColor: 'black',
      alignItems: 'center',
      justifyContent: 'center'
  },
  text: {
      textAlign: 'center',
      fontSize: 30,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'black',
  },
  text_answer: {
      fontSize: 30,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
  },
  button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 15,
      paddingHorizontal: 30,
      margin: 5,
      backgroundColor: 'grey',

  },
});


export default Test
