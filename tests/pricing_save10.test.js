const { calculateFinalAmount } = require('../src/pricing');

describe('calculateFinalAmount - SAVE10 Coupon', () => {
    test('applies SAVE10 coupon correctly', () => {
        expect(calculateFinalAmount(100, 'SAVE10')).toBe(90);
        expect(calculateFinalAmount(200, 'SAVE10')).toBe(180);
    });
});
