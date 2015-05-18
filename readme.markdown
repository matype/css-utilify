# css-utilify [![Build Status](https://travis-ci.org/morishitter/css-utilify.svg)](https://travis-ci.org/morishitter/css-utilify)

Add `@base` annotations to the rules.

Using with [AtCSS](https://github.com/morishitter/atcss) or [postcss-include](https://github.com/morishitter/postcss-include).

## Install

```shell
$ npm install css-utilify
```

## Usage

### CLI

```
$ css-utilify input-file (output-file-name)
```

Default `output-file-name` is `input-file.base.css`.

### in PostCSS

```js
var fs = require('fs')
var postcss = require('postcss')
var utilify = require('postcss-utilify')

var css = fs.readFileSync('input.css', 'utf-8')

var output = postcss(css)
  .use(utilify)
  .process(css)
  .css
```

Using this `input.css`:

```css
.fl {
  float: left;
}

.pdt-10 {
  padding-top: 10px;
}
```

You will get:

```css
.fl {
  /* @base */
  float: left;
}

.pdt-10 {
  /* @base */
  padding-top: 10px;
}
```

## License

The MIT License (MIT)

Copyright (c) 2015 Masaaki Morishita
