import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'game',
  
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
  },
});

export default slice.reducer;

const { newPickedColor, playerWon, playAgain } = slice.actions;

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