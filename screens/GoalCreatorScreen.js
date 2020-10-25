import React, { useState, useCallback } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard, Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import { Button, TextInput, DefaultTheme } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux'
import { addGoal } from '../store/actions/goals'
import colors from '../assets/colors';

const GoalCreatorScreen = props => {

    const dispatch = useDispatch()

    const goals = useSelector(state => state.goals.goals)

    const [goalName, setGoalName] = useState('');
    const [goalAmount, setGoalAmount] = useState(0);

    const buttonHandler = () => {
        const newGoal = {
            goalName,
            goalAmount,
        }
        var newGoalArray = goals;
        newGoalArray.push(newGoal);
        addGoalHandler(newGoalArray);
        props.navigation.replace('Home');
    }

    const addGoalHandler = useCallback((newGoalArray) => {
        dispatch(addGoal(newGoalArray))
    }, [dispatch])

    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
            <View style={styles.container}>
                <TextInput
                    label='Goal Name'
                    value={goalName}
                    onChangeText={input => setGoalName(input)}
                    style={styles.goalNameField}
                    mode='outlined'
                    theme={{ ...DefaultTheme, colors: { primary: colors.primary } }}
                />
                <TextInput
                    label="Goal Amount"
                    value={goalAmount}
                    onChangeText={input => setGoalAmount(input)}
                    style={styles.goalNameField}
                    mode='outlined'
                    theme={{ ...DefaultTheme, colors: { primary: colors.primary } }}
                />
                <Button
                    icon="check" mode="contained" onPress={() => buttonHandler()}
                    theme={{ ...DefaultTheme, colors: { primary: colors.primary } }}
                    style={styles.goalCreatorConfirm}>
                    New Goal
                </Button>
            </View>
        </TouchableWithoutFeedback>
    )
}

GoalCreatorScreen.navigationOptions = navData => {
    const roomTitle = 'Add a New Goal';

    return {
        headerTitle: roomTitle,
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="Back"
                    iconName={Platform.OS === 'android' ? 'md-arrow-back' : 'ios-arrow-back'}
                    onPress={() => {
                        navData.navigation.replace('Home');
                    }}
                />
            </HeaderButtons>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    goalNameField: {
        width: '80%',
        height: 55,
        marginTop: 50,
    },
    goalCreatorConfirm: {
        width: '35%',
        height: 40,
        marginTop: 50,
    }
});

export default GoalCreatorScreen 
