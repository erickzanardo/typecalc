import { Formats } from "../models/Formats"

export class FormatsHelper {
  static guess(value: string): Formats {
    if (!isNaN(parseInt(value)))
      return Formats.Number
    else if (typeof(value) == "string")
      return Formats.String;
    return null;
  }
}
