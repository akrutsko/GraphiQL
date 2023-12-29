import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '../store';

type variablesState = {
  variables: string;
};

const initialState: variablesState = {
  variables: '{\n  \n}',
};

const variablesSlice = createSlice({
  name: 'variables',
  initialState,
  reducers: {
    updateVariables: (state, action: PayloadAction<string>) => {
      state.variables = action.payload;
    },
  },
});

export const selectVariablesData = (state: RootState) => state.variables.variables;

export const { updateVariables } = variablesSlice.actions;
export const variablesReducer = variablesSlice.reducer;
