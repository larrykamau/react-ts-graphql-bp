import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.toBeAdded || initialState;

export const selectToBeAdded = createSelector(
  [selectDomain],
  toBeAddedState => toBeAddedState,
);
export const selectStories = createSelector(
  [selectDomain],
  toBeAddedState => toBeAddedState.stories,
);
