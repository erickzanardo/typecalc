/// <reference path='../../custom-typings/blessed/blessed.d.ts' />
/// <reference path='../../typings/node/node.d.ts' />
import blessed = require("blessed");
import { SpreadSheet } from "./../models/SpreadSheet";

var sheet = new SpreadSheet();

var screen = blessed.screen({
  autoPadding: true,
  smartCSR: true
});

var container = blessed.box({
  height: "100%",
  width: "100%"
});
screen.append(container);

// Build the input on the top
var editbox = blessed.textbox({
  left: 0,
  height: 3,
  width: "100%",
  border: {
    type: "line"
  },
  inputOnFocus: true
});
container.append(editbox);

var cellSize = {w: 10, h: 3};
var initialCells = {
  w: Math.ceil(screen.width / cellSize.w),
  h: Math.ceil(screen.height / cellSize.h)
};

var tableOffset = 3;
var matrix = [];
// Labels
for (var y = 0; y < initialCells.h; y++) {
  for (var x = 0; x < initialCells.w; x++) {
    if (y == 0) {
      // Label
      container.append(blessed.text({
        top: tableOffset,
        left: cellSize.w + (cellSize.w * x),
        width: cellSize.w,
        border: { type: "line" },
        content: x + ""
      }));
    } else {
      // Label
      var box = blessed.text({
        top: tableOffset + (cellSize.h * y),
        left: cellSize.w * x,
        width: cellSize.w,
        border: { type: "line" },
        content: (x == 0 ? x + "": "")
      });
      container.append(box);

      if (x > 0) {
        if (!matrix[y - 1]) matrix[y - 1] = [];
        matrix[y - 1][x - 1] = box;
      }
    }
  }
}

// Quit on Escape, q, or Control-C.
screen.key(["C-c"], function(ch, key) {
  return process.exit(0);
});

var current = {x: 0, y: 0};
var blurCell = function() {
  // XXX
  if (!matrix[current.y]) return;
  var box = matrix[current.y][current.x];
  // XXX
  if (!box) return;
  box.style.bg = "";
  screen.render();
};

var focusCell = function() {
  // XXX
  if (!matrix[current.y]) return;
  var box = matrix[current.y][current.x];
  // XXX
  if (!box) return;
  box.style.bg = "green";
  screen.render();
};

var editMode = false;
screen.key("i", function() {
  editMode = true;
  var box = matrix[current.y][current.x];
  editbox.setValue(box.getContent());
  editbox.focus();
  screen.render();
});

editbox.on("submit", function() {
  if (editMode) {
    editMode = false;
    var value = editbox.getValue();
    editbox.setValue("");

    var box = matrix[current.y][current.x];
    box.setContent(value);
    box.focus();
    screen.render();
  }
});

screen.key("j", function() {
  if (editMode) return;
  blurCell();
  current.y++;
  focusCell();
});

screen.key("k", function() {
  if (editMode) return;
  blurCell();
  current.y--;
  focusCell();
});

screen.key("l", function() {
  if (editMode) return;
  blurCell();
  current.x++;
  focusCell();
});

screen.key("h", function() {
  if (editMode) return;
  blurCell();
  current.x--;
  focusCell();
});

focusCell();
