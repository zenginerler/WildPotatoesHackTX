/**********************************************************************;
* Project           : Mentee Goal Tracker (HackTX 2020)
*
* Author            : Ahmet Nalcaci, Mehmet Zenginerler, Sriram Alagappan, 
*
* Date created      : 10/24/2020
*
* Purpose           : 
*
***********************************************************************/
import React, { useState } from 'react';
import { LogBox } from 'react-native'
import * as Font from 'expo-font'
import { AppLoading } from 'expo'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk'

// import navigator
import MainNavigator from './navigation/MainNavigator'

// import reducers
import goalReducer from './store/reducers/goals'

// combine and create store
const rootReducer = combineReducers({
  goals: goalReducer,
})

const store = createStore(rootReducer, applyMiddleware(ReduxThunk))

// get fonts from assests
const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
  })
}

// disable error warnings while in development
LogBox.ignoreAllLogs()

export default function App() {

  const [fontLoaded, setFontLoaded] = useState(false)
  // load fonts
  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
      />
    )
  }

  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}
