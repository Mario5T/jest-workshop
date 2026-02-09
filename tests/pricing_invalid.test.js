const { calculateFinalAmount } = require('../src/pricing');

describe('calculateFinalAmount - Invalid Subtotal', () => {
    test('throws error for invalid subtotal', () => {
        expect(() => calculateFinalAmount(-10)).toThrow('Invalid subtotal');
        expect(() => calculateFinalAmount('abc')).toThrow('Invalid subtotal');
    });
});
