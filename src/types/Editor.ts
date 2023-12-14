import type { HEADERS_EDITOR, VARIABLES_EDITOR } from '../constants';

export type Editor = typeof VARIABLES_EDITOR | typeof HEADERS_EDITOR;
