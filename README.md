# felt-recipe-preact

[![Build Status][travis-image]][travis-url]

A recipe for [Felt](https://github.com/cognitom/felt) with Preact.

## Usage via CLI

```bash
$ npm install -g felt felt-recipe-preact
$ felt --recipe preact --src public
```

## Usage via Express

```bash
$ npm install felt felt-recipe-preact
```

```javascript
'use strict'
const
  express = require('express'),
  felt = require('felt'),
  recipe = require('felt-recipe-preact')

const
  app = express(),
  flavor = { src: 'public' }

app.use(felt(recipe, flavor))
app.use(express.static('public'))
app.listen(3000)
```

[travis-image]:https://img.shields.io/travis/ezekielchentnik/felt-recipe-preact.svg?style=flat-square
[travis-url]:https://travis-ci.org/ezekielchentnik/felt-recipe-preact
