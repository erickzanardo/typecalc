import { Formats } from "./Formats";
import { FormatsHelper } from "./../helpers/FormatsHelper";

export class Column {
  private _identifier : string;
  private _value : any;
  private _format : Formats;

  constructor(identifier : string) {
    this._identifier = identifier;
  }

  get identifier(): string { return this._identifier; }
  get value(): string { return this._value; }
  set value(value: string) {
    this._format = FormatsHelper.guess(value);
    switch (this._format) {
      case Formats.String:
        this._value = value;
        break;
      case Formats.Number:
        this._value = parseInt(value);
        break;
    }
  }
}
