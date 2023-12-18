import { bindActionCreators } from '@reduxjs/toolkit';

import { setAuth } from '../store/slices/userSlice';

import { useAppDispatch } from '.';

export function useActions() {
  const dispatch = useAppDispatch();

  return bindActionCreators({ setAuth }, dispatch);
}
