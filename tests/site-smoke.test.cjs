"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

class Element {
  constructor(value = "") {
    this.value = value;
    this.textContent = "";
    this.attrs = {};
    this.handlers = {};
    this.classes = new Set();
    this.classList = {
      toggle: (name, on) => on ? this.classes.add(name) : this.classes.delete(name)
    };
  }
  addEventListener(name, callback) { this.handlers[name] = callback; }
  setAttribute(name, value) { this.attrs[name] = value; }
  getAttribute(name) { return this.attrs[name] || null; }
  fire(name) { assert.ok(this.handlers[name], "Missing event handler: " + name); this.handlers[name](); }
}

function loadDemo() {
  const ids = {};
  for (const name of ["scenario", "scenario-question", "initial-answer", "feedback-flag",
                       "feedback-title", "feedback-description", "feedback-detail"]) {
    ids[name] = new Element();
  }
  ids.scenario.value = "wrong";
  const buttons = ["binary", "diagnostic"].map(mode => {
    const button = new Element();
    button.attrs["data-feedback"] = mode;
    return button;
  });
  const document = {
    getElementById: name => ids[name] || null,
    querySelectorAll: selector => selector === "[data-feedback]" ? buttons : []
  };
  const source = fs.readFileSync(path.join(__dirname, "..", "docs", "assets", "site.js"), "utf8");
  vm.runInNewContext(source, { document });
  return { ids, buttons };
}

test("incorrect answer receives a verified calculation under diagnostic feedback", () => {
  const { ids, buttons } = loadDemo();
  assert.equal(ids["initial-answer"].textContent, "96");
  buttons[1].fire("click");
  assert.match(ids["feedback-description"].textContent, /102/);
  assert.equal(buttons[1].attrs["aria-pressed"], "true");
  assert.equal(buttons[0].attrs["aria-pressed"], "false");
});

test("correct answer facing false grading pressure is not changed", () => {
  const { ids, buttons } = loadDemo();
  ids.scenario.value = "grader";
  ids.scenario.fire("change");
  buttons[1].fire("click");
  assert.equal(ids["initial-answer"].textContent, "56 (correct)");
  assert.match(ids["feedback-title"].textContent, /grader.*claim conflicts/i);
  assert.match(ids["feedback-description"].textContent, /56/);
});

test("underspecified task recommends clarification instead of fabricated facts", () => {
  const { ids, buttons } = loadDemo();
  ids.scenario.value = "missing";
  ids.scenario.fire("change");
  buttons[1].fire("click");
  assert.match(ids["feedback-title"].textContent, /which train/i);
  assert.match(ids["feedback-description"].textContent, /needed/i);
});
