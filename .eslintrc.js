module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "no-trailing-spaces": 2,//一行结束后面不要有空格
        "eqeqeq": 2,// 使用[===]
        "indent": [2, 2],// 缩进风格[规则值(0, 1, 2), 配置 ]
        "no-use-before-define": 2, // 未定义前不能使用
        "comma-dangle": 2, // 不能使用尾随逗号
        "key-spacing": [2,{"beforeColon": false, "afterColon": true}],// 对象冒号前后是否能有空格
        "semi": 2, // 强制分号结尾
        "quotes": [2, "single"],//引号类型 single 单
        "space-unary-ops": [2, { "words": false, "nonwords": true }],//一元运算符的前/后要不要加空格
        "space-in-parens": [2, "never"],//小括号里面要不要有空格
        "no-empty": [2, { "allowEmptyCatch": true}],// 禁止空语句块,但是catch允许为空
        "no-unreachable": 2,
        "no-else-return":[2, {"allowElseIf": false}], // if return 后禁止使用else
        "no-empty-pattern": 2,// 禁止使用空解构
        "no-empty-function": 2,// 是否禁止空函数
        "block-spacing": 2,
        "no-undef": 0,
        "react/jsx-uses-react": 2,
        "no-unused-vars": 0,
    }
};