module.exports = {
  trailingComma: 'none', //是否使用尾逗号，有三个可选值"<none|es5|all>"
  printWidth: 120, // 超过最大值换行
  tabWidth: 2,
  useTabs: false, // 缩进使用tab，不使用空格
  semi: false, //行位是否使用分号，默认为true
  singleQuote: true, //字符串是否使用单引号，默认为false，使用双引号
  jsxSingleQuote: false,
  bracketSpacing: true, // 在对象，数组括号与文字之间加空格
  arrowParens: 'avoid', // (x) => { } 箭头函数参数只有一个时是否要有小括号。avoid：省略括号always：不省略
  jsxBracketSameLine: false, // 在jsx中把'>' 是否单独放一行
  vueIndentScriptAndStyle: true,
  quoteProps: 'as-needed',
  proseWrap: 'preserve', // 换行方式 never  preserve
  endOfLine: 'lf',
  insertPragma: false,
  requirePragma: false,
  htmlWhitespaceSensitivity: 'strict',
  rangeStart: 0,
  'prettier.eslintIntegration': true,
  'eslint.autoFixOnSave': true,
  // 添加 vue 支持
  'eslint.validate': [
    'javascript',
    'javascriptreact',
    {
      language: 'vue',
      autoFix: true
    }
  ],
  overrides: [
    {
      files: '*.md',
      options: {
        tabWidth: 2
      }
    }
  ]
}
