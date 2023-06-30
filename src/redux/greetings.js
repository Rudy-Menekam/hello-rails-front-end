import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchGreeting = createAsyncThunk(
  'greeting/fetchGreeting',
  async () => {
    const response = await fetch('http://127.0.0.1:3000/api/message');
    const data = await response.json();
    return data;
  },
);

const greetingReducer = createSlice({
  name: 'greeting',
  initialState: [],
  reducers: {
    Greeting(state, action) {
      state.push(action.payload);
    },
  },
  extraReducers: {
    [fetchGreeting.fulfilled]: (state, action) => action.payload,
  },
});

export const { Greeting } = greetingReducer.actions;
export default greetingReducer.reducer;
