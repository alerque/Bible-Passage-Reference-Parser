var str = "Test CAPS İBRANİLER 1, İBRANILER 3, IBRANILER 5, etc. plus string with assorted en, tr, pl references like Romans 7:9 and Romalılar 6:1 or Revelations 22:6-8 and Vahiy 1:5-9 or an easy one like Job 16.";
console.log(str)

var full_parser = require("../js/full_bcv_parser.js").bcv_parser;
var full = new full_parser();
console.log("full:", full.parse(str).osis());

var en_parser = require("../js/en_bcv_parser.js").bcv_parser;
var en = new en_parser();
console.log("  en:", en.parse(str).osis());

var pl_parser = require("../js/pl_bcv_parser.js").bcv_parser;
var pl = new pl_parser();
console.log("  pl:", pl.parse(str).osis());

var tr_parser = require("../js/tr_bcv_parser.js").bcv_parser;
var tr = new tr_parser();
console.log("  tr:", tr.parse(str).osis());
