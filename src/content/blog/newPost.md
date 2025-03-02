---
title: "Mastering Markdown: The Ultimate Guide"
date: 2025-03-02
pubDate: 2025-03-02
---

# Mastering Markdown: The Ultimate Guide

Markdown is a lightweight markup language that you can use to format plain text. It’s widely used for writing documentation, blog posts, and even generating rich-text documents. In this guide, we’ll cover everything Markdown has to offer.

## Headers

Use `#` for headers:

```md
# H1
## H2
### H3
#### H4
##### H5
###### H6
```

### Example:

# H1
## H2
### H3
#### H4
##### H5
###### H6

## Emphasis

- **Bold**: `**bold**` or `__bold__`
- _Italic_: `*italic*` or `_italic_`
- ~~Strikethrough~~: `~~strikethrough~~`

## Lists

### Unordered List

```md
- Item 1
- Item 2
  - Subitem 1
  - Subitem 2
```

- Item 1
- Item 2
  - Subitem 1
  - Subitem 2

### Ordered List

```md
1. First item
2. Second item
3. Third item
```

1. First item
2. Second item
3. Third item

## Code Blocks

### Inline Code

Use backticks for inline code: `` `inline code` `` → `inline code`

### Block Code

````md
```javascript
console.log("Hello, Markdown!");
```
````

```javascript
// Using 'typeof' to infer types
const person = { name: "Alice", age: 30 };
type PersonType = typeof person;  // { name: string; age: number }

// 'satisfies' to ensure a type matches but allows more specific types
type Animal = { name: string };
const dog = { name: "Buddy", breed: "Golden Retriever" } satisfies Animal;

// Generics with 'extends' and default values
function identity<T extends number | string = string>(arg: T): T {
  return arg;
}

let str = identity();  // Default type is string
let num = identity(42);  // T inferred as number

// 'extends' with interface and class
interface HasLength {
  length: number;
}

function logLength<T extends HasLength = string>(arg: T): void {
  console.log(arg.length);
}

logLength("Hello");    // OK: string has length (default is string)
logLength([1, 2, 3]);  // OK: array has length
// logLength(123);      // Error: number doesn't have length

// 'typeof' with functions
function add(x: number, y: number): number {
  return x + y;
}

type AddFunctionType = typeof add;  // (x: number, y: number) => number

// Generic interfaces with 'extends' and default types
interface Box<T extends object = { message: string }> {
  content: T;
}

let defaultBox: Box = { content: { message: "Hello" } };  // Uses default type
let customBox: Box<{ status: number }> = { content: { status: 200 } };

// Complex example with 'satisfies' and default generics
type Task = {
  title: string;
  description?: string;
  completed: boolean;
};

const myTask = {
  title: "Learn TypeScript",
  completed: false,
  priority: "High",
} satisfies Task;  // Allows priority but ensures Task structure

// Generic function with default type
function wrapInArray<T = string>(value: T): T[] {
  return [value];
}

const stringArray = wrapInArray();  // Default to string
const numberArray = wrapInArray(42);  // T inferred as number

/**
 * Combines two generic types into a tuple.
 * 
 * @template T - The first type.
 * @template U - The second type.
 * @param {T} first - The first value.
 * @param {U} second - The second value.
 * @returns {[T, U]} A tuple containing both values.
 */
function combine<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}
```

## Links & Images

```md
[OpenAI](https://openai.com)

![Markdown Logo](https://upload.wikimedia.org/wikipedia/commons/4/48/Markdown-mark.svg)
```

[OpenAI](https://openai.com)

![Markdown Logo](https://upload.wikimedia.org/wikipedia/commons/4/48/Markdown-mark.svg)

## Blockquotes

```md
> This is a blockquote.
>
> - Markdown Guide
```

> This is a blockquote.

## Tables

```md
| Syntax | Description |
|--------|-------------|
| Header | Title       |
| Row 1  | Data       |
| Row 2  | More Data  |
```

| Syntax | Description |
|--------|-------------|
| Header | Title       |
| Row 1  | Data       |
| Row 2  | More Data  |

## Task Lists

```md
- [x] Completed Task
- [ ] Incomplete Task
- [ ] Another Task
```

- [x] Completed Task
- [ ] Incomplete Task
- [ ] Another Task

## Horizontal Rule

```md
---
```

---

## Footnotes

```md
Here is a sentence with a footnote.[^1]

[^1]: This is the footnote.
```

Here is a sentence with a footnote.[^1]

[^1]: This is the footnote.

## Conclusion

Markdown is a simple yet powerful tool for writing formatted content. Whether you're creating documentation, writing a blog post, or drafting notes, Markdown makes it easy and efficient.
