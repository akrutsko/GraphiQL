import { type TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import type { AppDispatch, RootState } from '../store/store';

export * from './useLanguage';
export * from './useLanguageDispatch';
export * from './useTheme';
export * from './useTranslation';
export * from './useActions';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
