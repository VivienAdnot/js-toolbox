Regular expressions are used:

- with the RegExp methods `test` and `exec`
- with the String methods `match`, `replace`, `search`, and `split`.

**UseCases**

- when you want to know **if a pattern is found** in a string, use `test` or `search`. For more information but slower execution, use the `exec` or `match` methods.

**If you use `exec` or `match`:**

- if the match succeeds, these methods return an array of the chunks found.
- If the match fails, the exec method returns `null` (which coerces to false).
