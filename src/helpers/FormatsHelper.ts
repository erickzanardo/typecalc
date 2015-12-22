import { Formats } from "../models/Formats"

export class FormatsHelper {
  static guess(value: string): Formats {
    if (!isNaN(parseInt(value)))
      return Formats.Number;
    if (value.indexOf("=") == 0)
      return Formats.Formula;
    else if (typeof(value) == "string")
      return Formats.String;
    return null;
  }
}
