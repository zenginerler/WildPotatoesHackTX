import { ADD_GOAL } from '../actions/goals'

const initialState = {
    goals: 0,
}

const goalReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_GOAL: {
            return {
                ...state,
                goals: action.data.goals,
            }
        }
        default: {
            return state;
        }
    }
}

export default goalReducer