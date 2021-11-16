import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'picked',
  
  initialState: {
    color: 'RGB',
    hasWon: false,
  },

  reducers: {
    newPickedColor: (state, action) => {
      state.color = action.payload;
    },
    playerWon: (state, action) => {
      state.hasWon = true;
    },
    resetState: (state, action) => {
      state.color = 'RGB';
      state.hasWon = false;
    },
  },
});

export default slice.reducer;

const { newPickedColor, playerWon, resetState } = slice.actions;

export const pickColor = (pickedColor) => async dispatch => {
  try {
    dispatch(newPickedColor(pickedColor));
  } catch (e) {
    return console.error(e.message);
  }
}

export const won = () => async dispatch => {
  try {
    dispatch(playerWon());
  } catch (e) {
    return console.error(e.message);
  }
}

export const reset = () => async dispatch => {
  try {
    dispatch(resetState());
  } catch (e) {
    return console.error(e.message);
  }
}