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

  setValue(row: number, column: string, value : string) {
    if (!this.row(row)) {
      this.setRow(new Row(row));
    }

    if (!this.row(row).hasColumn(column)) {
      this.row(row).addColumn(column);
    }
    this.column(row, column).value = value;
  }

  getValue(rowId: number, columnId: string): string {
    var column = this.column(rowId, columnId);
    return column ? column.value : null;
  }
}
