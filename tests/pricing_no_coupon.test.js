const { calculateFinalAmount } = require('../src/pricing');

describe('calculateFinalAmount - No Coupon', () => {
    test('returns subtotal when no coupon is provided', () => {
        expect(calculateFinalAmount(100)).toBe(100);
        expect(calculateFinalAmount(50)).toBe(50);
    });
});
