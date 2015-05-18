var postcss = require('postcss')

module.exports = postcss.plugin('css-utilify', function (options) {
    options = options || {}

    return function (root) {
        return utilify(root)
    }
})

function utilify (root) {
    var baseAnnotation = postcss.comment({ text: '@base' }).toString()

    root.eachRule(function (rule) {
        rule.prepend(baseAnnotation)
    })

    return root
}

module.exports.utilify = utilify
