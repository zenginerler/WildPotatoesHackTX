import { ADD_GOAL } from '../actions/goals'

const initialState = {
    goals: [],
}

const goalReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_GOAL: {
            return {
                ...state,
                goals: action.data.newGoalArray,
            }
        }
        default: {
            return state;
        }
    }
}

export default goalReducer