import { StyleSheet, View, Button, TextInput } from "react-native";
import { useState } from 'react';

function GoalInput(props){

  const [enteredGoalText, setEnteredGoalText] = useState('');
  
  function goalInputHandler(enteredText){
    setEnteredGoalText(enteredText);
  };

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }

  return(
    <View style={styles.inputContainer}>
        <TextInput 
          style={styles.textInput} 
          placeholder='Your cours goal'
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <Button 
          title='Add goal'
          onPress={addGoalHandler}
        />
      </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8
  },
})