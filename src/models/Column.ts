import { Formats } from "./Formats";

export class Column {
  private _identifier : string;
  private _value : string;
  private _format : Formats;

  constructor(identifier : string) {
    this._identifier = identifier;
  }

  get identifier(): string { return this._identifier; }
  get value(): string { return this._value; }
  set value(value: string) { this._value = value; }
}
