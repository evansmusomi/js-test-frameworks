const assert = require('assert');
const math = require('../Math/Math');

describe("Math", function(){
    let first;
    let second;

    beforeEach(function(){
        first = 2;
        second = 3;
    });

    it("should add two numbers", function(){
        let result = math.add(first, second);
        assert.equal(result, first+second);
    });
});