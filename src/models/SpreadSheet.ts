import { Row } from "./Row";
import { Column } from "./Column";

export class SpreadSheet {
  private _rows : Object;
  
  constructor() {
    this._rows = {};
  }

  private row(row: number): Row {return this._rows[row]; }
  private setRow(row: Row) { this._rows[row.identifier] = row; }

  private column(row: number, column: string): Column {
    return this.row(row) ? this.row(row).getColumn(column) : null;
  }

  setValue(column: string, row: number, value : string) {
    if (!this.row(row)) {
      this.setRow(new Row(row, this));
    }

    if (!this.row(row).hasColumn(column)) {
      this.row(row).addColumn(column);
    }
    this.column(row, column).value = value;
  }

  getColumn(columnId: string, rowId: number): Column {
    return this.column(rowId, columnId);
  }

  getValue(columnId: string, rowId: number): any {
    var column = this.column(rowId, columnId);
    return column ? column.value : null;
  }
}
