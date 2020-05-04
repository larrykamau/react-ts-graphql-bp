import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';
import { Story } from './types';
// The initial state of the ToBeAdded container
export const initialState: ContainerState = {
  stories: [],
};

const toBeAddedSlice = createSlice({
  name: 'toBeAdded',
  initialState,
  reducers: {
    loadStories(state) {
      state.stories = [];
    },
    storiesLoaded(state, action: PayloadAction<Story[]>) {
      const stories = action.payload;
      state.stories = stories;
    },
  },
});

export const { actions, reducer, name: sliceKey } = toBeAddedSlice;
