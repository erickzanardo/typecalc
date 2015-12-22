import { SpreadSheet } from "./SpreadSheet";
import { Column } from "./Column";

export class Row {
  private _identifier : number;
  private spreadSheet : SpreadSheet;
  private _columns : Object;
 
  constructor(identifier : number, spreadSheet : SpreadSheet ) {
    this._identifier = identifier;
    this.spreadSheet = spreadSheet;
    this._columns = {};
  }

  get identifier(): number { return this._identifier; }

  getColumn(identifier : string): Column { return this._columns[identifier]; }

  addColumn(identifier : string) {
    this._columns[identifier] = new Column(identifier, this.spreadSheet);
  }

  hasColumn(identifier : string): boolean {
    return !!this._columns[identifier];
  }
}
