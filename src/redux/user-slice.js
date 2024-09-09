import { createSlice } from "@reduxjs/toolkit";
import { saveStorage, getStorage } from "../helpers";

export const usersSlice = createSlice({
    name: "users",
    initialState: {
        value: getStorage("users") || [],
    },
    reducers: {
        addUsers(state, action) {
            state.value = [...state.value, action.payload];
            saveStorage("users", state.value);
        },
        removeUsers(state, action) {
            state.value = state.value.filter(
                (user) => user.id !== action.payload.id
            );
            saveStorage("users", state.value);
        },
    },
});

export const { addUsers, removeUsers } = usersSlice.actions;
export default usersSlice.reducer;
