const test = require('tape');
const math = require('../Math/Math');
 
let first = 2;
let second = 3;
 
test("Math add function", function(t) {
  let result = math.add(first, second);
 
  t.equal(result, first + second);
  t.end();
});