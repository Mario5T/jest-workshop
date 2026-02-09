const { calculateFinalAmount } = require('../src/pricing');

describe('calculateFinalAmount - Case Insensitive Coupon', () => {
    test('handles case-insensitive coupon codes', () => {
        expect(calculateFinalAmount(100, 'save10')).toBe(90);
        expect(calculateFinalAmount(100, 'flat50')).toBe(50);
        expect(calculateFinalAmount(100, 'SaVe10')).toBe(90);
    });
});
