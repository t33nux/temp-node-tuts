// const amount = 9

// if(amount < 10){
//     console.log('small number')
// }
// else{
//     console.log('large number')
// }

// console.log('its my first node app')

// Modules 

const _ = require('lodash');

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)


