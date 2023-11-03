# What is invariant?

invariant is a basic [Deno](https://deno.land/x/invariant) implementation of
[invariant](https://github.com/zertosh/invariant).

# Usage

```ts
async function fetchSomething(id?: string): Promise<Response> {
  // tsc knows id is either string | undefined
  invariant(
    typeof id === "string",
    `Unable to fetch something, bad Id: "${String(id)}"`,
  );
  // tsc knows id is string or an error was thrown
  return await fetch(`https://some-resource.dev/gimme/${id}`);
}
```
