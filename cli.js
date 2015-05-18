#!/usr/bin/env node

var fs = require('fs')
var pkg = require('./package.json')
var postcss = require('postcss')
var utilify = require('./').utilify

var minimist = require('minimist')
var argv = minimist(process.argv.slice(2), {
    boolean: [
        'help',
        'versions'
    ],
    alias: {
        c: 'compress',
        h: 'help',
        V: 'versions'
    }
})

if (argv.V) console.log(pkg.version)

if (argv.h) {
    console.log('Usage: css-utilify input-name output-name [options]');
    console.log('');
    console.log('Options:');
    console.log('');
    console.log('  -V, --versions    output the version number');
    console.log('  -h, --help        output usage information');
}

if (argv._[0]) {
    var input = argv._[0]
    var fileName = input.split('.')[0]
    var extension = input.split('.')[1]
    if (extension !== 'css') throw new Error('Input file must be a CSS file')

    var css = fs.readFileSync(input, 'utf-8')
    var root = postcss.parse(css)
    var output = argv._[1] || fileName + '.base.css'
    fs.writeFile(output, utilify(root), function (err) {
        if (err) throw err
        console.log('Successed')
    })
}
