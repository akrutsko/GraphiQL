import { bindActionCreators } from '@reduxjs/toolkit';

import { setAuth } from '../store/slices/userSlice';
import { updateResponseData } from '../store/slices/responseSlice';

import { useAppDispatch } from '.';

export function useActions() {
  const dispatch = useAppDispatch();

  return bindActionCreators({ setAuth, updateResponseData }, dispatch);
}
