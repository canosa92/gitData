import { createSlice } from '@reduxjs/toolkit';
export const userSlice = createSlice ({
    name: 'user',
    initialState: {
        name: '',
        username: '',
        followers: 0,
        repositorios:0,
        imagen:''
    },
    reducers: {
        setUser: (state, action) => {
            state.name = action.payload.name;
            state.username = action.payload.username;
            state.followers = action.payload.followers;
            state.repositorios = action.payload.repositorios;
            state.imagen = action.payload.imagen;
        }
    }
});
    
export const { setUser } = userSlice.actions;
export const selectUser = (state) => state.user;
export default userSlice.reducer;


