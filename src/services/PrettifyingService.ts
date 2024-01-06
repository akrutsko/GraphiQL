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

  private areBracketsClosed(inputString: string): boolean {
    const stack: string[] = [];
    const brackets: Record<string, string> = {
      '(': ')',
      '[': ']',
      '{': '}',
    };

    for (const char of inputString) {
      if (brackets[char]) {
        stack.push(char);
      } else if (Object.values(brackets).includes(char)) {
        const lastOpenBracket = stack.pop();
        if (!lastOpenBracket || brackets[lastOpenBracket] !== char) {
          return false;
        }
      }
    }

    return stack.length === 0;
  }

  public formatJSON(query: string) {
    const queryWithoutEmptyLines = this.removeEmptyLinesAndParagraphs(query);
    console.log(queryWithoutEmptyLines);
    let result = '';
    let indentationLevel = 0;
    let isFirstCharOpeningBrace = queryWithoutEmptyLines.startsWith('{');
    for (const el of queryWithoutEmptyLines) {
      switch (el) {
        case '{':
        case '[':
          indentationLevel++;
          if (isFirstCharOpeningBrace) {
            result += `${el}\n${'  '.repeat(indentationLevel)}`;
            isFirstCharOpeningBrace = false;
            break;
          } else {
            result += ` ${el}\n${'  '.repeat(indentationLevel)}`;
            break;
          }

        case '}':
        case ']':
          indentationLevel--;
          result += `\n${'  '.repeat(indentationLevel)}${el}`;
          break;

        case ',':
          const areBracketsClosedInResult = this.areBracketsClosed(result);
          if (result.includes('{') && !areBracketsClosedInResult) {
            result += `\n${'  '.repeat(indentationLevel)}`;
            break;
          } else {
            result += ` ${'  '.repeat(indentationLevel)}`;
            break;
          }

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

    return result.replace(/(\bfragment\b)/g, '\n$1');
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
