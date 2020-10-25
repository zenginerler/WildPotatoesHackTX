import { createAppContainer, createSwitchNavigator } from 'react-navigation' 
import { createStackNavigator } from 'react-navigation-stack';

import MenteeHomeScreen from '../screens/MenteeHomeScreen'
import GoalCreatorScreen from '../screens/GoalCreatorScreen'

const defaultNavOptions = {
    headerTintColor: 'black',
    headerTitleStyle: {
        fontFamily: 'open-sans-bold',
    },
};

const MenteeNavigator = createStackNavigator(
    {
        Home: MenteeHomeScreen,
        Goal: GoalCreatorScreen,
    },
    {
        defaultNavigationOptions: defaultNavOptions,
        animationTypeForReplace: 'push'
    }
)

const MainNavigator = createSwitchNavigator({
    Mentee: MenteeNavigator,
});

export default createAppContainer(MainNavigator)