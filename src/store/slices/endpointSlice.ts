import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '../store';
import { DEFAULT_ENDPOINT } from '../../constants';

type EndpointState = {
  endpoint: string;
};

const initialState: EndpointState = {
  endpoint: DEFAULT_ENDPOINT,
};

const endpointSlice = createSlice({
  name: 'endpoint',
  initialState,
  reducers: {
    updateEndpoint: (state, action: PayloadAction<string>) => {
      state.endpoint = action.payload;
    },
  },
});

export const selectEndpoint = (state: RootState) => state.endpoint.endpoint;

export const { updateEndpoint } = endpointSlice.actions;
export const endpointReducer = endpointSlice.reducer;
