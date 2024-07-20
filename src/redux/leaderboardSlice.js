import { createSlice } from '@reduxjs/toolkit';

const leaderboardSlice = createSlice({
  name: 'leaderboard',
  initialState: {
    scores: [
      { name: 'Anjum', amount: '₹50000', time: '00:56:23' },
      { name: 'Pragati Azad', amount: '₹5000', time: '00:56:23' },
      { name: 'Pragati Azad', amount: '₹500', time: '00:56:23' },
      { name: ' Hannibal Hector', amount: '', time: '00:56:23' },
      { name: 'Razzi', amount: '', time: '00:56:23' },
      { name: ' McRamble', amount: '', time: '00:56:23' },
      { name: 'Razzi', amount: '', time: '00:56:23' },
      { name: 'McRamble ', amount: '', time: '00:56:23' },
      { name: 'Muhammed Anjum Kunnummao', amount: '', time: '00:56:23' },
      { name: 'Muhammed Anjum Kunnummal', amount: '', time: '00:56:23' },
      
    ],
  },
  reducers: {
    addScore: (state, action) => {
      state.scores.push(action.payload);
     
    },
  },
});

export const { addScore } = leaderboardSlice.actions;
export default leaderboardSlice.reducer;
