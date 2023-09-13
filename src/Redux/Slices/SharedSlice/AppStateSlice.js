import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    userState: JSON.parse(localStorage.getItem("UserState")) ?? { userType: -1 }

}
export const AppStateSlice = createSlice(
    {
        name: "AppState",
        initialState: initialState,
        reducers: {
            updateUserTypeState: (state, action) => {
                localStorage.setItem("UserState", JSON.stringify({ userType: action.payload }));
                state.userState.userType = action.payload
            }
        }
    }
)
export const { updateUserTypeState } = AppStateSlice.actions;
export const AppSateReducer = AppStateSlice.reducer