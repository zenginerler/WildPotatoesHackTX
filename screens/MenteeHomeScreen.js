import React, { useState, useCallback, useEffect } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { Button, DefaultTheme } from 'react-native-paper'
import Goal from '../components/goal'
import { useSelector } from 'react-redux'
import colors from '../assets/colors'

const MenteeHomeScreen = props => {

  const renderListItem = (itemData) => {
    return (
      <Goal
        goalName={itemData.goalName}
        key={itemData.goalName}
      />
    )
  }

  const goals = useSelector(state => state.goals.goals)

  const buttonHandler = () => {
    props.navigation.replace('Goal')
  }

  useEffect(() => {
    // console.log(goals)
  }, [goals])

  return (
    <View style={styles.container}>
      {goals.map((goal) => (
        renderListItem(goal)
      ))}
      <View style={styles.body}>
        <Button 
          icon="plus-circle-outline" 
          mode="contained" 
          onPress={() => buttonHandler()}
          theme={{ ...DefaultTheme, colors: { primary: colors.primary } }}>
          New Goal
        </Button>
      </View>
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
    justifyContent: 'flex-end',
    marginBottom: 50,
  },
  list: {
    width: '80%',
    backgroundColor: 'whitesmoke'
    
  }
});

export default MenteeHomeScreen
