var postcss = require('postcss')

module.exports = postcss.plugin('css-utilify', function (options) {
    options = options || {}

    return function (root) {
        var baseAnnotation = postcss.comment({text: '@base'}).toString()

        root.eachRule(function (rule) {
            rule.prepend(baseAnnotation)
        })
    }
})
