# Markdown Features 

The [Markdown syntax][0] supports the following features:

- [Paragraphs and line breaks](#paragraphs-and-line-breaks)
- [Headers](#headers)
- [Lists](#lists)
- [Ordered lists](#ordered-lists)
- [Check Lists](#check-lists)
- [Emphasis](#emphasis)
- [Inline Code](#inline-code)
- [Code blocks](#code-blocks)
- [Code blocks with syntax highlight](#code-blocks-with-syntax-highlight)
- [Links](#links)
- [Images](#images)
- [Quotes](#quotes)
- [Tables](#tables)
- [Horizontal rule](#horizontal-rule)
- [Page break (HTML)](#page-break-html)

By using just these features you can write out almost any document you could with MS Word.

[0]:https://daringfireball.net/projects/markdown/syntax

## What is Markdown ?

Markdown is a syntax language aiming for easy reading and writing of structured text. 

It is used all across the internet. [GitHub](https://github.com), [Microsoft docs](https://docs.microsoft.com/fr-fr/dotnet/), in every major blogging platform and even in Whatsapp.  
*(Maybe with some minor differences)*

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
```

Or

```
* Item
* Item
    * Sub-item
* item
```

Or

```
+ Item
+ Item
    + Sub-item
+ item
```

### Result

- Item 1
- Item 2
    - Item 2.1
- item 3

---

## Ordered lists

```
1. Item
2. Item
    1. Item
3. item
```

Only the first number matters:

```
1. Item
3. Item
8. item
```

```
42. Item
1. Item
1. item
```

### Result

1. Item
2. Item
    1. Item
3. item

--- 

1. Item
3. Item
8. item

--- 

42. Item
1. Item
1. item

---

## Check Lists

```
- [x] Done
- [ ] Not Done
```


### Result

- [x] Done
- [ ] Not Done

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

You can see a [list of language](https://github.com/highlightjs/highlight.js) that could have syntax highlight.

### Result

```javascript
// this is js code:
let myVar = 0;
```

---

## Links

There is multiple ways to insert links. All of them can refer to a website, header, or local file.

```
Check this link https://daringfireball.net/projects/markdown/

Check this [file][1]

Check this [section](#headers)

Here is another paragraph...

[1]: MarkdownFeatures.pdf
```

### Result

Check this link https://daringfireball.net/projects/markdown/

Check this [file][1]

Check this [section](#headers)

Here is another paragraph...

[1]: MarkdownFeatures.pdf

---

## Images

```
![Markdown Logo](https://upload.wikimedia.org/wikipedia/commons/4/48/Markdown-mark.svg)
```

### Result

![Markdown Logo](https://upload.wikimedia.org/wikipedia/commons/4/48/Markdown-mark.svg)

---

## Quotes

```
> This is a quote!
> Don't forget to insert two blank spaces at the end of a line to force line break.
```

### Result

> This is a quote!  
> Don't forget to insert two blank spaces at the end of a line to force line break.

---

## Tables

```
This is a|minimalist table|align left (default)|align right|center
---|---|---|--:|:-:
It|is|the|same|result
1|2|3|4|5

| This is a | realistic table | align left (default) | align right | center |
| --------- | --------------- | -------------------- | ----------: | :----: |
| It        | is              | the                  |        same | result |
| 1         | 2               | 3                    |           4 |   5    |
```

### Result

This is a|minimalist table|align left (default)|align right|center
---|---|---|--:|:-:
It|is|the|same|result
1|2|3|4|5

| This is a | realistic table | align left (default) | align right | center |
| --------- | --------------- | -------------------- | ----------: | :----: |
| It        | is              | the                  |        same | result |
| 1         | 2               | 3                    |           4 |   5    |

---

## Horizontal rule

```
This is a  horizontal line

---

This is an alternative

***
```

### Result

This is a  horizontal line

---

This is an alternative

***

---

## Page break (HTML)

When you export your file in `.pdf`, you'll want to add page breaks.

```html
First page content...

<div style="page-break-before: always;"/>

second page content...
```

Simply add the `HTML`code above where you want a page break to happen.
