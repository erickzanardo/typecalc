import { Formats } from "./Formats";
import { FormatsHelper } from "./../helpers/FormatsHelper";
import { SpreadSheet } from "./SpreadSheet";
import { Formula } from "./Formula";

export class Column {
  private _identifier : string;
  private spreadSheet : SpreadSheet;
  private _value : any;
  private _format : Formats;
  private _formula : Formula;

  constructor(identifier : string, spreadSheet: SpreadSheet) {
    this._identifier = identifier;
    this.spreadSheet = spreadSheet;
  }

  get formula() : Formula { return this._formula; }
  isFormula() : boolean { return !!this._formula; }
  
  get identifier(): string { return this._identifier; }
  get value(): string { return this._value; }
  set value(value: string) {
    this._format = FormatsHelper.guess(value);
    this._formula = null;
    switch (this._format) {
      case Formats.String:
        this._value = value;
        break;
      case Formats.Number:
        this._value = parseInt(value);
        break;
      case Formats.Formula:
        this._formula = new Formula(value, this.spreadSheet);
        this._value = this._formula.value;
        break;
    }
  }
}
