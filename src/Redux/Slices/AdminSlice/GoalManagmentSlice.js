import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    updateState: {
        isUpdatingMode: false,
        selectedGoal: undefined
    }
}
export const GoalManagmentSlice = createSlice(
    {
        name: "GoalManagment",
        initialState: initialState,
        reducers: {

            setGoalToUpdate: (state, action) => {
                state.updateState.isUpdatingMode = true
                state.updateState.selectedGoal = action.payload
            },
            resetUpdateState: (state) => {
                state.updateState = {
                    isUpdatingMode: false,
                    selectedGoal: undefined
                }
            }
        }
    }
)
export const { setGoalToUpdate, resetUpdateState } = GoalManagmentSlice.actions
export const AdminGoalManagmentReducer = GoalManagmentSlice.reducer