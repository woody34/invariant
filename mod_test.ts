import { invariant } from "./mod.ts";
import { assertThrows, assert } from "https://deno.land/std@0.204.0/assert/mod.ts";

Deno.test(function invariantHappyPathTest() {
  invariant(Boolean(true), 'Condition is true.')
  // should not throw ^^
  assert(true)
});

Deno.test(function invariantSadPathTest() {
  assertThrows(() => invariant(Boolean(false), 'Condition is false.'), 'Invariant failed: Condition is false.');
});
