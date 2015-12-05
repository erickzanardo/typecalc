import { Formats } from "./Formats";

export class Column {
  private _identifier : string;
  private _value : Object;
  private _format : Formats;

  constructor(identifier : string) {
    this._identifier = identifier;
  }

  get identifier(): string { return this._identifier; }
  get value(): Object { return this._value; }
  set value(value: Object) { this._value = value; }
}
