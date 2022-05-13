import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'picked',
  
  initialState: {
    color: 'RGB',
    hasWon: false,
    newGame: false,
  },

  reducers: {
    newPickedColor: (state, action) => {
      state.color = action.payload;
    },
    playerWon: (state, action) => {
      state.hasWon = true;
      state.newGame = false;
    },
    playAgain: (state, action) => {
      state.newGame = true;
      state.hasWon = false;
    },
    resetState: (state, action) => {
      state.color = 'RGB';
      state.hasWon = false;
      state.newGame = false;
    },
  },
});

export default slice.reducer;

const { newPickedColor, playerWon, playAgain, resetState } = slice.actions;

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

export const startAgain = () => async dispatch => {
  try {
    dispatch(playAgain());
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