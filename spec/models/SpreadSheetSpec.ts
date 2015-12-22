/// <reference path="../../typings/mocha/mocha.d.ts" />
/// <reference path='../../typings/chai/chai.d.ts' />
import chai = require("chai");
var expect = chai.expect;

import { SpreadSheet } from "../../src/models/SpreadSheet";

describe("#SpreadSheet", function() {
  describe("setting and getting a value", function() {

    var spreadSheet = new SpreadSheet();
    spreadSheet.setValue("B", 1, "Bla");

    it("returns the correctly value", function() {
      expect(spreadSheet.getValue("B", 1)).to.equal("Bla");
    });

    context("when the cell is a number", function() {
      var spreadSheet = new SpreadSheet();
      spreadSheet.setValue("A", 1, "1");
      it("return the correct datatype", function() {
        expect(typeof(spreadSheet.getValue("A", 1))).to.equal("number");
      });
    });

    context("when the cell is a formula", function() {
      var spreadSheet = new SpreadSheet();
      spreadSheet.setValue("A", 1, "1");
      spreadSheet.setValue("A", 2, "1");
      spreadSheet.setValue("A", 3, "=A1 + A2");

      it("return the correct datatype", function() {
        expect(spreadSheet.getValue("A", 3)).to.equal(2);
      });
    });
  });
});
