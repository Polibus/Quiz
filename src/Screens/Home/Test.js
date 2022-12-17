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
{
  "question": "Najstarszy piłkarz serie A",
  "answers": [
    {
      "content":  "Giroud",
      "isCorrect": false
    },
    {
      "content":  "Quagliarella",
      "isCorrect": false
    },
    {
      "content":  "Ibrahimović",
      "isCorrect": true
    },
    {
      "content":  "Ribéry",
      "isCorrect": false
  },
]
},
{
  "question": "Najdroższy piłkarz świata",
  "answers": [
    {
      "content":  "Mbappé",
      "isCorrect": false
    },
    {
      "content":  "Haaland",
      "isCorrect": true
    },
    {
      "content":  "Vinicius Junior",
      "isCorrect": false
    },
    {
      "content":  "Bellingham",
      "isCorrect": false
  },
]
},


]


function Test({ navigation}) {
  const [test, setTest] = React.useState([])
   const [questionNumber, setQuestionNumber] = React.useState(0)
   let points = React.useRef(0)

   useEffect(() => {
    setTest(question)
}, [])

function handleOnPress(answerNumber){
  if(test[questionNumber].answers[answerNumber].isCorrect===true){
      points.current++
  }
  if(questionNumber+1===test.length){
      setQuestionNumber(0)
      navigation.navigate('Score',{points: points.current,test:test.length});
      points.current=0
      return
  }
  setQuestionNumber(questionNumber+1);
}

  return (
        test.length > 0 ? (
               <View style={{ flex: 1 }}>
                   <View  style={styles.quest}>
                       <Text style={styles.text}>{test[questionNumber].question}</Text>
                   </View>

                   <TouchableHighlight style={styles.button} onPress={() => handleOnPress(0)}>
                       <Text style={styles.text_answer}>{test[questionNumber].answers[0].content}</Text>
                   </TouchableHighlight>

                   <TouchableHighlight style={styles.button} onPress={() => handleOnPress(1)}>
                       <Text style={styles.text_answer}>{test[questionNumber].answers[1].content}</Text>
                   </TouchableHighlight>

                   <TouchableHighlight style={styles.button} onPress={() => handleOnPress(2)}>
                       <Text style={styles.text_answer}>{test[questionNumber].answers[2].content}</Text>
                   </TouchableHighlight>

                   <TouchableHighlight style={styles.button} onPress={() => handleOnPress(3)}>
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
