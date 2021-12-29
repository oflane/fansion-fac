module.exports = {
  root: true,
  "parser": "vue-eslint-parser",
  parserOptions: {
    "parser": "@babel/eslint-parser",
    sourceType: 'module'
  },
  env: {
    browser: true,
    jquery: true,
    "commonjs": true,
    "es6": true,
    "node": true
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends:  [

    "standard",

    "plugin:vue/essential"

  ],
  // required to lint *.vue files
  plugins: [
    'vue',
  ],
  "settings": {
    "html/html-extensions": [".html", ".we"],
    "html/report-bad-indent": "error"
  },
  // add your custom rules here
  'rules': {
    'object-curly-spacing': 0,
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    //"indent": ["error", 2, {"SwitchCase": 1}],
    "vue/script-indent": ["error", 2, {  // script标签缩进设置
      "baseIndent": 0,
      "switchCase": 0,
      "ignores": []
    }],
    "vue/valid-template-root": 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  },
  overrides: [ { 'files': ['*.vue'], 'rules': { 'indent': 'off' } } ]
}
