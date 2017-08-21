// Using jasmine for unit tests

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
        expect(result).toEqual(first+second)
    });

    it("should subtract two numbers", function(){
        let result = math.subtract(first, second);
        expect(result).toEqual(first-second)
    });

    it("should multiply two numbers", function(){
        let result = math.multiply(first, second);
        expect(result).toEqual(first*second)
    });

    it("should divide two numbers", function(){
        let result = math.divide(first, second);
        expect(result).toEqual(first/second);
    });
});