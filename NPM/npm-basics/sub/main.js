const lods = require("lodash")

let res = lods.defaults({ 'a': 1 }, { 'a': 3, 'b': 2 });

console.log(res)