import { invariant } from "./mod.ts";

Deno.bench(function invariantHappyBench() {
  invariant(Boolean(true), "Condition is true.");
});

Deno.bench(function invariantSadBench() {
  try {
    invariant(Boolean(false as true));
  } catch {
    return;
  }
});
