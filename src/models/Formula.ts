import { SpreadSheet } from "./SpreadSheet";

export class Formula {
  private _rawFormula : string;
  private spreadSheet : SpreadSheet;
  private _value : number;

  constructor(rawFormula : string, spreadSheet : SpreadSheet) {
    this._rawFormula = rawFormula;
    this.spreadSheet = spreadSheet;
    this.calcFormula();
  }

  get rawFormula() : string { return this._rawFormula; }
  get value() : number { return this._value; }

  private calcFormula() {
    var f = this._rawFormula;
    // Remove the = character
    f = f.substring(1, f.length);
    // Parses the cells references
    var m;
    while ((m = f.match(/([A-Z]+)([0-9]+)/)))  {
      var match : string = m[0];
      var column : string = m[1];
      var row : number = parseInt(m[2]); 

      var cellValue  = this.spreadSheet.getValue(column, row);
      f = f.replace(match, cellValue);
    }
    // Evaluate the expression
    this._value = eval(f);
  }
}
