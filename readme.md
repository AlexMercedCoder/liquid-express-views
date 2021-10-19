## liquid-express-views
### by Alex Merced of AlexMercedCoder.com

It's pretty simple

1. `npm install liquid-express-views`

```js
const express = require("express")
const app = require("liquid-express-views")(express())
```

that's it!

Need update leave issues and pull requests here: https://github.com/AlexMercedCoder/liquid-express-views\

Documentation for liquidjs: https://liquidjs.com/index.html

## P.S.

You can pass a secondary argument that is an object with the following properties:

- viewDir: string representing view directory, defaults to "./views"
- middleware: a function that can be used to register middleware, defaults to `(app) => {}`
- engineConfig: a function that can be used to adjust templating engine, like registering liquid plugins, defaults to `(engine) => {}`
- root: can pass an array of other directories to check for templates, defaults to "./views"
- ext: can pass a file extension to look for, defaults to "./liquid"