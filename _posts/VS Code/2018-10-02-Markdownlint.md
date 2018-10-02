---
layout: post
title:  "Markdownlint"
date:   2018-10-02 12:00:00 +0100
categories: VC Code
---

When putting together this Notes site I wanted to keep consistency within the structure of the posts. This led me to I find the great VS Code extension [Markdownlint](https://github.com/DavidAnson/markdownlint) by [David Anson](https://github.com/DavidAnson)

## Override lint rules

This extension comes with sensible default linting rules but there are always times when we want to modify these for our individual needs. To do so we add a `.markdownlint.json` file to the root of our project, from here the extension automatically picks up and applies our overrides.

```json
{
    "default": true,
    "MD002": {"level" : 2},
    "MD041": false,
    "line-length": false
}
```

| Rule | Description |
| --- | ------------ |
| default | Use the default rules as a starting point |
| MD002 | Use H2 headings as the first heading (the H1 is generated using the title outside of the MD file) |
| MD041 | Allow the MD file to start without a heading |
| line-length |  Allow any line length |

Default Use the default rules as a starting point

For further information on the rules that can be applied see the [Markdownlint rules documentation](https://github.com/DavidAnson/markdownlint/blob/master/doc/Rules.md) on GitHub.

See also [Dave Johnson's blog post](https://thisdavej.com/build-an-amazing-markdown-editor-using-visual-studio-code-and-pandoc/) for more information using the the extension and more.