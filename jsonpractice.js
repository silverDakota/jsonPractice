// Load the full build.
var _ = require('lodash');
// Load the core build.
var _ = require('lodash/core');
// Load the FP build for immutable auto-curried iteratee-first data-last methods.
var fp = require('lodash/fp');
 
// Load method categories.
var array = require('lodash/array');
var object = require('lodash/fp/object');
 
// Cherry-pick methods for smaller browserify/rollup/webpack bundles.
var at = require('lodash/at');
var curryN = require('lodash/fp/curryN');

'use strict';

const fs = require('fs');

let rawdata = fs.readFileSync('data.json');  
let out = JSON.parse(rawdata);  
//console.log(out); 

let newitem = {  
    "fname": "brands",
    "lname": "marques",
    "age": "21"
};

let data = JSON.stringify(newitem);  
fs.writeFileSync('data.json', data);  
//overwrites datajs to {"fname":"brands","lname":"marques","age":"21"}

//Lodash
console.log(_.compact(out));

console.log(_.indexOf(out, 19));

console.log(_.size(out));

//console.log(_.sortBy(items, [function(o) { return o.fname; }]));

//console.log(_.shuffle(out));
