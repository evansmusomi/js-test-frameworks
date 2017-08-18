// Using Ava for unit tests

const test = require('ava');
const math = require('../Math/Math')

const firstOperand = 2;
const secondOperand = 3;

test("Math add function", t => {
    const result = math.add(firstOperand, secondOperand);

    t.is(result, firstOperand+secondOperand)
});