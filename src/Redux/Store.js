import { configureStore } from "@reduxjs/toolkit";
import { UserApi } from "../API/UserApi";
import { AdminUserManagmentReducer } from "./Slices/AdminSlice/UserManagmentSlice";
import { GoalApi } from "../API/GoalApi";
import { AdminGoalManagmentReducer } from "./Slices/AdminSlice/GoalManagmentSlice";
import { AppSateReducer } from "./Slices/SharedSlice/AppStateSlice";

export const store = configureStore({
    reducer: {
        [UserApi.reducerPath]: UserApi.reducer,
        [GoalApi.reducerPath]: GoalApi.reducer,
        adminUserManagetStore: AdminUserManagmentReducer,
        adminGoalManagmentStore: AdminGoalManagmentReducer,
        AppStateStore: AppSateReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(UserApi.middleware)
            .concat(GoalApi.middleware)
});