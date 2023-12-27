import type { errorMessagePrettifying } from '../types';
import { INDENTATION_LEVEL } from '../constants';

class PrettifyingService {
  whitespace: number;

  constructor(whitespace: number) {
    this.whitespace = whitespace;
  }

  private removeEmptyLinesAndParagraphs(query: string): string {
    const lines = query.replace(/\s*([{}():])\s*/g, '$1');
    return lines.replace(/\s+/g, ',');
  }

  private checkBracketsValidity(query: string): string {
    const stack: string[] = [];

    for (const el of query) {
      if (el === '{') {
        stack.push('{');
      } else if (el === '}') {
        if (stack.length === 0 || stack.pop() !== '{') {
          return '}';
        }
      }
    }

    if (stack.length > 0) {
      return '{';
    }

    return '';
  }

  public formatJSON(query: string) {
    const queryWithoutEmptyLines = this.removeEmptyLinesAndParagraphs(query);
    let result = '';
    let indentationLevel = 0;
    for (const el of queryWithoutEmptyLines) {
      switch (el) {
        case '{':
        case '[':
          indentationLevel++;
          result += ` ${el}\n${'  '.repeat(indentationLevel)}`;
          break;

        case '}':
        case ']':
          indentationLevel--;
          result += `\n${'  '.repeat(indentationLevel)}${el}`;
          break;

        case ',':
          result += `\n${'  '.repeat(indentationLevel)}`;
          break;

        case ':':
          result += `${el} `;
          break;

        default:
          if (result.endsWith('}')) {
            result += `\n${'  '.repeat(indentationLevel)}${el}`;
          } else {
            result += el;
          }
      }
    }

    return result;
  }

  public formatQuery(query: string, errorMessage: errorMessagePrettifying): string | Array<string> {
    try {
      const validationResult = this.checkBracketsValidity(query);
      if (validationResult.length > 0) {
        throw new Error(validationResult);
      }
      return this.formatJSON(query);
    } catch (error) {
      if ((error as Error).message === '{') {
        return [errorMessage.textOpeningParenthesis];
      } else {
        return [errorMessage.textClosingParenthesis];
      }
    }
  }
}

const prettifyingService = new PrettifyingService(INDENTATION_LEVEL);

export default prettifyingService;
