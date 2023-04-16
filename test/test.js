
// esm
import rescue from '../src/rescue.mjs';
import assert from 'assert';

// commonjs
//const rescue = require('../src/rescue.cjs');
//const assert = require('assert');

assert.equal(0, rescue(() => {
    return 0;
}));

assert.equal(null, rescue(() => {
    throw new Error;
}));

assert.equal(false, rescue(() => {
    throw new Error;
}, false));

assert.equal('EXCEPTION!!', rescue(() => {
    throw new Error('EXCEPTION!!');
}, (e) => {
    return e.message;
}));
