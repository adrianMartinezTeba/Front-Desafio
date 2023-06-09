import { createSlice } from '@reduxjs/toolkit';

const interestsSlice = createSlice({
  name: 'interests',
  initialState: [],
  reducers: {
    addInterest: (state, action) => {
      state.push(action.payload);
    },
    removeInterest: (state, action) => {
      const interestIndex = state.indexOf(action.payload);
      if (interestIndex !== -1) {
        state.splice(interestIndex, 1);
      }
    },
    clearInterests: (state) => {
      state = [];
    },
  },
});

export const { addInterest, removeInterest, clearInterests } = interestsSlice.actions;

export default interestsSlice.reducer;
