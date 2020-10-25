export const ADD_GOAL = 'ADD_GOAL'

export const addGoal = (newGoalArray) => {
    return async dispatch => {

        dispatch({
            type: ADD_GOAL,
            data: {
                newGoalArray,
            }
        })
    } 
}