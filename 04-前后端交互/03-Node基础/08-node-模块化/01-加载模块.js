// 1. 加载内置的 fs 模块
const fs = require('fs')

// 2. 加载用户的自定义模块
// 注意：在使用 require 加载用户自定义模块期间，可以省略 .js 的后缀名
const custom = require('./custom')

// 3. 加载第三方模块
const monent = require('moment')