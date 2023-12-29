import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '../store';

type EndpointState = {
  endpoint: string;
};

const initialState: EndpointState = {
  endpoint: 'https://swapi-graphql.eskerda.vercel.app',
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
