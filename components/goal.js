import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Goal = props => {
    return (
        <View style={styles.goalBody}>
            <View style={styles.goalName}>
                <Text style={styles.goalText}>{props.goalName}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    goalBody: {
        width: '80%',
        height: '10%',
        backgroundColor: 'whitesmoke',
        borderRadius: 5,
        margin: 10,
        borderWidth: 1,
    },
    goalText: {
        fontSize: 15,
        color: 'black',
        paddingLeft: 5,
        paddingTop: 4,
    },
    goalName: {
        

    }
})

export default Goal