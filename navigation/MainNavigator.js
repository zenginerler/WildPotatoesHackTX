import { createAppContainer, createSwitchNavigator } from 'react-navigation' 
import { createStackNavigator } from 'react-navigation-stack';

import MenteeHomeScreen from '../screens/MenteeHomeScreen'

const defaultNavOptions = {
    headerTintColor: 'black',
    headerTitleStyle: {
        fontFamily: 'open-sans-bold',
    },
};

const MenteeNavigator = createStackNavigator(
    {
        Home: MenteeHomeScreen,
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