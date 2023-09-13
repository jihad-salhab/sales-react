import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    updateState: {
        isUpdatingMode: false,
        selectedUser: undefined
    }
}
export const UserManagmentSlice = createSlice(
    {
        name: "UserManagment",
        initialState: initialState,
        reducers: {

            setUserToUpdate: (state, action) => {
                state.updateState.isUpdatingMode = true
                state.updateState.selectedUser = action.payload
            },
            resetUpdateState: (state) => {
                state.updateState = {
                    isUpdatingMode: false,
                    selectedUser: undefined
                }
            }
        }
    }
)
export const { changeUpdateMode, setUserToUpdate, resetUpdateState } = UserManagmentSlice.actions
export const AdminUserManagmentReducer = UserManagmentSlice.reducer