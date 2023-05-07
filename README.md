# Deno missing `.send()` method on `ChildProcess`

A child process in node has a [`send()`](https://nodejs.org/api/child_process.html#subprocesssendmessage-sendhandle-options-callback) method that is missing in deno.

## Steps to reproduce

1. Clone this repo
2. Run `deno run -A foo.js`

## Error

```sh
error: Uncaught TypeError: child.send is not a function
  child.send({ hello: "world" }); // <- Throws missing methods
        ^
      at file:///project/foo.js:13:7
```
