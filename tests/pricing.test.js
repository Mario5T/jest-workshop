const { calculateFinalAmount } = require('../src/pricing');

describe('calculateFinalAmount', () => {
    test('returns subtotal when no coupon is provided', () => {
        expect(calculateFinalAmount(100)).toBe(100);
        expect(calculateFinalAmount(50)).toBe(50);
    });

    test('applies SAVE10 coupon correctly', () => {
        expect(calculateFinalAmount(100, 'SAVE10')).toBe(90);
        expect(calculateFinalAmount(200, 'SAVE10')).toBe(180);
    });

    test('applies FLAT50 coupon correctly', () => {
        expect(calculateFinalAmount(100, 'FLAT50')).toBe(50);
        expect(calculateFinalAmount(50, 'FLAT50')).toBe(0);
        expect(calculateFinalAmount(30, 'FLAT50')).toBe(0);
    });

    test('throws error for invalid subtotal', () => {
        expect(() => calculateFinalAmount(-10)).toThrow('Invalid subtotal');
        expect(() => calculateFinalAmount('abc')).toThrow('Invalid subtotal');
    });

    test('handles case-insensitive coupon codes', () => {
        expect(calculateFinalAmount(100, 'save10')).toBe(90);
        expect(calculateFinalAmount(100, 'flat50')).toBe(50);
        expect(calculateFinalAmount(100, 'SaVe10')).toBe(90);
    });
});
