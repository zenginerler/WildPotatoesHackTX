export const ADD_GOAL = 'ADD_GOAL'

export const addGoal = (new_goal) => {
    return async dispatch => {
        dispatch({
            type: ADD_GOAL,
            data: {
                goals: new_goal,
            }
        })
    } 
}