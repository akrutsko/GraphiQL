import { configureStore } from '@reduxjs/toolkit';

import { userReducer } from './slices/userSlice';
import { responseReducer } from './slices/responseSlice';
import { requestReducer } from './slices/requestSlice';
import { endpointReducer } from './slices/endpointSlice';
import { variablesReducer } from './slices/variablesSlice';
import { headersReducer } from './slices/headersSlice';
import { documentationReducer } from './slices/documentationSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    responseData: responseReducer,
    requestData: requestReducer,
    endpoint: endpointReducer,
    variables: variablesReducer,
    headers: headersReducer,
    documentation: documentationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
