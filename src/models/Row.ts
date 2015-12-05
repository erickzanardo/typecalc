import { Column } from "./Column";

export class Row {
  private _identifier : number;
  private _columns : Object;
 
  constructor(identifier : number ) {
    this._identifier = identifier;
    this._columns = {};
  }

  get identifier(): number { return this._identifier; }

  getColumn(identifier : string): Column { return this._columns[identifier]; }

  addColumn(identifier : string) {
    this._columns[identifier] = new Column(identifier);
  }

  hasColumn(identifier : string): boolean {
    return !!this._columns[identifier];
  }
}
