const { calculateFinalAmount } = require('../src/pricing');

describe('calculateFinalAmount - FLAT50 Coupon', () => {
    test('applies FLAT50 coupon correctly', () => {
        expect(calculateFinalAmount(100, 'FLAT50')).toBe(50);
        expect(calculateFinalAmount(50, 'FLAT50')).toBe(0);
        expect(calculateFinalAmount(30, 'FLAT50')).toBe(0);
    });
});
