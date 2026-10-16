import test from "node:test";
import assert from "node:assert/strict";
import { pad } from "../src/pad.js";
test("pads", () => { assert.equal(pad("x"), "  x"); });
