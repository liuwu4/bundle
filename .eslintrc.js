const OFF = 0; // 关闭
const WARN = 1; // 警告
const ERROR = 2; // 报错
module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['babel', 'react'],
  rules: {
    'no-trailing-spaces': ERROR, //一行结束后面不要有空格
    eqeqeq: ERROR, // 使用[===]
    indent: [ERROR, 2], // 缩进风格[规则值(0, 1, 2), 配置 ]
    'comma-spacing': [ERROR, { after: true }],
    'no-use-before-define': ERROR, // 未定义前不能使用
    'comma-dangle': ERROR, // 不能使用尾随逗号
    'key-spacing': [ERROR, { beforeColon: false, afterColon: true }], // 对象冒号前后是否能有空格
    semi: ERROR, // 强制分号结尾
    quotes: [ERROR, 'single'], //引号类型 single 单
    'space-unary-ops': [ERROR, { words: true, nonwords: false }], //一元运算符的前/后要不要加空格
    'space-in-parens': [ERROR, 'never'], //小括号里面要不要有空格
    'no-empty': [ERROR, { allowEmptyCatch: true }], // 禁止空语句块,但是catch允许为空
    'no-unreachable': ERROR,
    'no-else-return': [ERROR, { allowElseIf: false }], // if return 后禁止使用else
    'no-empty-pattern': ERROR, // 禁止使用空解构
    'no-empty-function': ERROR, // 是否禁止空函数
    'block-spacing': ERROR,
    'react/jsx-uses-react': ERROR,
    'no-unused-vars': [ERROR, { vars: 'all', argsIgnorePattern: '^_' }],
    'no-multi-spaces': ERROR
    // 'no-implicit-dependencies': ['optional', ['src']]
  }
};
