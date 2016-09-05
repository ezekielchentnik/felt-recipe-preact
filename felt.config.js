'use strict'

/**
 * A recipe for Felt with Preact
 */

const
  rollup = require('felt-rollup'),
  buble = require('rollup-plugin-buble'),
  nodeResolve = require('rollup-plugin-node-resolve'),
  commonjs = require('rollup-plugin-commonjs'),
  replace = require('rollup-plugin-replace'),
  postcss = require('felt-postcss'),
  postcssImport = require('postcss-import'),
  cssnext = require('postcss-cssnext')

module.exports = {
  // default handlers for each extension
  handlers: {
    '.js': rollup({
      plugins: [
        buble({ jsx: 'h' }),
        commonjs(),
        replace({ 'process.env.NODE_ENV': JSON.stringify('production') }),
        nodeResolve({ jsnext: true, browser: true, main: true })
      ],
      sourceMap: true
    }),
    '.css': postcss({
      plugins: [
        postcssImport(),
        cssnext()
      ],
      options: {
        map: { inline: false }
      }
    })
  }
}
