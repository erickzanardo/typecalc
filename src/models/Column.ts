import { Formats } from "./Formats";

export class Column {
  private _identifier : string;
  private _value : Object;
  private _format : Formats;

  get identifier(): string { return this._identifier; }
}
