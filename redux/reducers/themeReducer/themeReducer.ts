import {createSlice} from "@reduxjs/toolkit";

const init:{themeId : number} = {
    themeId : 0
}

const themeReducer = createSlice({
    name: 'themeReducer',
    initialState: init,
    reducers: {
        changeTheme: (state, action) => {
            state.themeId = action.payload.themeId
        },
        defaultTheme: (state, action) => {
            state.themeId = 0
        }
    }
})

export const {changeTheme,defaultTheme} = themeReducer.actions
export default themeReducer.reducer