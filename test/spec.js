'use strict'
const
  assert = require('assert'),
  co = require('co'),
  Nightmare = require('nightmare'),
  fsp = require('fs-promise'),
  path = require('path'),
  felt = require('felt/lib/server'),
  configBuilder = require('felt/lib/config-builder'),
  recipe = require('../felt.config.js')

describe('felt-recipe-preact', () => {
  let server
  const port = 3333, root = __dirname

  before(co.wrap(function* () {
    const opts = configBuilder(recipe, { src: 'fixture', port, root })
    server = yield felt(opts)
  }))

  it('renders Preact components', co.wrap(function* () {
    const
      url = `http://localhost:${ port }/index.html`,
      text = yield Nightmare()
        .goto(url)
        .wait()
        .evaluate(() => document.querySelector('h1').innerText)
        .end()

    assert.equal(text, 'Hi from DummyComponent.')
  }))

  after(() => {
    server.close()
  })
})
