# Markdown Basics Features

- [Paragraphs and line breaks](#paragraphs-and-line-breaks)
- [Headers](#headers)
- [Lists](#lists)
- [Emphasis](#emphasis)
- [Inline Code](#inline-code)
- [Code blocks](#code-blocks)
- [Code blocks with syntax highlight](#code-blocks-with-syntax-highlight)

## What is Markdown ?

Markdown is a syntax language aiming for easy reading and writing of structured text.

Markdown's file extension is `.md` or `.markdown`.  
Inside, there is only text. So you could rename a text file (`file.txt`) with the Markdown file extension (`file.md`) and still be able to read it.

---

## Paragraphs and line breaks

```
Put one blank line before another paragraph. 
Because without a blank line, you don't create a new paragraph!

Put two blank spaces at the end of the line  
and return to a new line to do a line break.

```

### Result

Put one blank line before another paragraph. 
Because without a blank line, you don't create a new paragraph!

Put two blank spaces at the end of the line  
and return to a new line to do a line break.

---

## Headers

Simply put a "`#`" before the title text.

```markdown
# Main Title

## Sub Title

...

###### 6th Level Title
```
 ### Result

# Main Title

## Sub Title

...

###### 6th Level Title

---

## Lists

```
- Item
- Item
    - Sub-item
- item

1. Item 1
2. Item 2
   1. Sub-Item 1
3. item 3
```

 ### Result

- Item
- Item
    - Sub-item
- item

1. Item 1
2. Item 2
   1. Sub-Item 1
3. item 3

---

## Emphasis

```
Text can be *emphasized* in _italic_ by using asterisks or underscores.   
Use **two** for __bold text__.
```

 ### Result

Text can be *emphasized* in _italic_ by using asterisks or underscores.   
Use **two** for __bold text__.

---

## Inline Code

```
You can put `inline code` by placing it between backtick quotes.
```

 ### Result

You can put `inline code` by placing it between backtick quotes.

---

## Code blocks

You can also do code blocks by putting 3 backtick quotes above and below it.

    ```
    INSERT CODE HERE
    ```

Or indent text with 4 blank spaces.


        INSERT CODE HERE

 ### Result

```
INSERT CODE HERE
```

---

## Code blocks with syntax highlight

    ```javascript
    // this is js code:
    let myVar = 0;
    ```

 ### Result

```javascript
// this is js code:
let myVar = 0;
```
