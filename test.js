var fs = require('fs')
var utilify = require('./')
var test = require('tape')

var css = fs.readFileSync('fixture.css', 'utf-8')
var expected = fs.readFileSync('expected.css', 'utf-8')

test('in postcss', function (t) {
    var postcss = require('postcss')
    var actual = postcss().use(utilify()).process(css).css
    t.same(actual, expected)
    t.end()
})
