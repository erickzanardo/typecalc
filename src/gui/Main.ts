/// <reference path='../../custom-typings/blessed/blessed.d.ts' />
import blessed = require("blessed");

var screen = blessed.screen({
  autoPadding: true,
  smartCSR: true
});

var container = blessed.box({
  height: "100%",
  width: "100%",
  content: "Test"
});
screen.append(container);

screen.render();
