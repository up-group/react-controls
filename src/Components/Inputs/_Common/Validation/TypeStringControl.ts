import { ErrorControl, ErrorControlType } from './error';

export default class TypeStringControl implements ErrorControl<any> {
  private _pattern: RegExp;
  private _patternErrorMessage: string;

  constructor(patern: RegExp | string, patternErrorMessage: string) {
    this._pattern = (patern instanceof RegExp) ? patern : new RegExp(patern);
    this._patternErrorMessage = patternErrorMessage;
    this.isValidValue = this.isValidValue.bind(this);
  }

  isValidValue(value: string): ErrorControlType<string> {
    if (this._pattern && value) {
      const result = this._pattern.test(value);
      if (result) {
        return { hasError: false, correctValue: value };
      } else {
        return {
          hasError: true,
          errorMessage: this._patternErrorMessage
            ? this._patternErrorMessage
            : 'Ne répond pas au patern ' + this._pattern,
        };
      }
    }
    return { hasError: false, correctValue: value };
  }
}
