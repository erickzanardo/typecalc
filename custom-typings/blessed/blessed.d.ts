// Type definitions for chai 3.2.0
// Project: https://github.com/chjj/blessed
// Definitions by: Erick Zanardo <https://github.com/erickzanardo/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface Blessed {
  screen(opts: Object): any;
  box(opts: Object): any;
  textbox(opts: Object): any;
  text(opts: Object): any;
}

declare var blessed: Blessed

declare module "blessed" {
  export = blessed;
}
