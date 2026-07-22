## Array Method caused err **_Each child in a list should have a unique "key" prop_**

When you use .slice() to render an array of elements directly, React sees a "list" of children. Because those <div> elements don't have a key prop, React throws the Each child in a list should have a unique "key" prop error.

### The Fix

You just need to add a unique key prop to each of your body part variables in HangmanDrawing.tsx.

**Update your body parts to include a key:**

```ts
 const HEAD = (
  <div
    key="head" # ADD THIS ONE
    style={{
      width: "5
```
