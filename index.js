var ohm = require('ohm-js');
var fs = require('fs');
var assert = require('assert');
var grammar = ohm.grammar(fs.readFileSync('Grammer.ohm').toString());