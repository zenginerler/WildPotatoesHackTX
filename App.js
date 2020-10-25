import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import Goal from './components/goal.js';

export default function App() {

  const [counter, setCounter] = useState(0);

  const buttonHandler = () => {
    setCounter(oldCounter => oldCounter + 1);
    console.log(counter);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Hello World!</Text>
      </View>
      <View style={styles.body}>
        <Button icon="plus-circle-outline" mode="contained" onPress={() => buttonHandler()}>
          Increment Goal {counter}
        </Button>
      </View>
      <Goal 
        goalName = "Workout"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  counter: {
    backgroundColor: 'red',
    width: "60%",
    alignItems: 'center',

  },
  header: {
    height: '8%',
    width: '100%',
    backgroundColor: 'orange',
    justifyContent: 'flex-end',
  },
  headerText: {
    color: 'white',
    fontSize: 28,
    paddingLeft: 5,
  },
  body: {
    flex: 1,
    justifyContent: 'center',
  }
});
