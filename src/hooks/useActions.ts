import { bindActionCreators } from '@reduxjs/toolkit';

import { setAuth } from '../store/slices/userSlice';
import { updateResponseData } from '../store/slices/responseSlice';
import { updateRequestData } from '../store/slices/requestSlice';
import { updateEndpoint } from '../store/slices/endpointSlice';
import { updateVariables } from '../store/slices/variablesSlice';
import { updateHeaders } from '../store/slices/headersSlice';

import { useAppDispatch } from '.';

export function useActions() {
  const dispatch = useAppDispatch();

  return bindActionCreators(
    { setAuth, updateResponseData, updateRequestData, updateEndpoint, updateVariables, updateHeaders },
    dispatch,
  );
}
