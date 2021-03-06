"use strict";
// https://console.spec.whatwg.org/#count
// https://console.spec.whatwg.org/#countreset

// TODO(domfarolino): make this a link to
// https://console.spec.whatwg/org/#counting pending
// the resolution of https://github.com/whatwg/console/issues/135

// TODO(domfarolino): DRY up the label conversion tests for count/countReset/time/timeEnd
// by probably making a helper function that passes in the console method to perform the
// conversion with so we're not duplicating everything

test(() => {
  let countLabelToStringCalled = false;

  console.count({
    toString() {
      countLabelToStringCalled = true;
    }
  });

  assert_true(countLabelToStringCalled, "toString() must be called on count()'s label when label is an object");
}, "console.count()'s label gets converted to string via label.toString() when label is an object");

test(() => {
  assert_throws({name: "Error"}, () => {
    console.count({
      toString() {
        throw new Error("conversion error");
      }
    });
  }, "count() must re-throw any exceptions thrown by label.toString() conversion");
}, "console.count() throws exceptions generated by erroneous label.toString() conversion");

test(() => {
  let countLabelToStringCalled = false;

  console.countReset({
    toString() {
      countLabelToStringCalled = true;
    }
  });

  assert_true(countLabelToStringCalled, "toString() must be called on countReset()'s label when label is an object");
}, "console.countReset()'s label gets converted to string via label.toString() when label is an object");

test(() => {
  assert_throws({name: "Error"}, () => {
    console.countReset({
      toString() {
        throw new Error("conversion error");
      }
    });
  }, "countReset() must re-throw any exceptions thrown by label.toString() conversion");
}, "console.countReset() throws exceptions generated by erroneous label.toString() conversion");
