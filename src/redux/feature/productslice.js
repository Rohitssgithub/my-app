import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchAllUsers = createAsyncThunk('showUser', async () => {
    try {
        let response = await httpRequest.get("/user");
        return response.data
    }
    catch (err) {
        console.log(err)
    }

});

export const fetchSingleUser = createAsyncThunk(
    "user/single",
    async (id) => {
        console.log('thunkAPI', id)
        try {
            let data = await httpRequest.put(`/user/${id}`);
            console.log("data", data)
            return data.data
        } catch (err) {
            // console.log(err)
            return rejectWithValue(err);

        }
    }
)
export const addUser = createAsyncThunk("addUser", async (formData, { rejectWithValue }) => {
    console.log('call')
    try {
        const response = await httpRequest.post('/user', formData)
        console.log('response', response)
        toast.success('User Added Successfully')
        return response.data;
    } catch (error) {
        console.log('error', error)
        toast.error('error while creating user')
        return rejectWithValue(error);
    }
})



export const updateUser = createAsyncThunk(
    "user/update",
    async (thunkAPI) => {
        console.log('thunkAPI', thunkAPI)
        try {
            let data = await httpRequest.put(`/user/${thunkAPI.id}`, thunkAPI.value);
            console.log("data", data)
            toast.success('User updated Successfully')
            return data.data
        } catch (err) {
            console.log(err)
            toast.error('error while updating user')
        }
    }
)


export const deleteUser = createAsyncThunk("delete/user", async (id, { rejectWithValue }) => {
    console.log(id)
    const response = await httpRequest.delete(`/user/${id}`);
    console.log(response)
    try {
        const result = await response.data;
        return result;
    } catch (error) {
        return rejectWithValue(error);
    }
})


const productReducer = createSlice({
    name: 'users',
    initialState: {
        allusers: [],
        singleUsers: [],
        filterUser: [],
        loading: false,
        error: null,
    },
    reducers: {
        searchUser: (state, action) => {
            state.filterUser = state.allusers.filter((ele) => {
                return ele.name.toLowerCase().includes(action.payload)
            })
        },
    },

    extraReducers: {
        [fetchAllUsers.pending]: (state) => {
            state.loading = true;
        },
        [fetchAllUsers.fulfilled]: (state, action) => {
            state.loading = false;
            state.allusers = action.payload;
        },
        [fetchAllUsers.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        [addUser.pending]: (state) => {
            state.loading = true;
        },
        [addUser.fulfilled]: (state, action) => {
            state.loading = false;
            state.allusers.push(action.payload);
        },
        [addUser.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        [updateUser.pending]: (state) => {
            state.loading = true;
        },
        [updateUser.fulfilled]: (state, action) => {
            console.log(action.payload);
            state.loading = false;
            state.allusers = state.allusers.map((ele) =>
                ele.id === action.payload.id ? action.payload : ele
            );
        },
        [updateUser.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        [deleteUser.pending]: (state) => {
            state.loading = true;
        },
        [deleteUser.fulfilled]: (state, action) => {
            console.log(action.payload)
            state.loading = false;
            state.allusers = state.allusers.filter((ele) => ele.id !== action.payload.id);
        },
        [deleteUser.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        [fetchSingleUser.pending]: (state) => {
            state.loading = true;
        },
        [fetchSingleUser.fulfilled]: (state, action) => {
            state.loading = false;
            state.singleUsers = action.payload
        },
        [fetchSingleUser.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
    }
})

export default productReducer.reducer;

export const { searchUser } = userReducer.actions;