# Jest Workshop Submission

## Student Details
- Name: Aditya Singh
- Roll Number: <Your Roll Number>
- GitHub Username: adityasingh

---

## Tests Written

List each test you wrote and briefly explain **what bug or regression it prevents**.

### 1. Test Name: `returns subtotal when no coupon is provided`
**What it protects against:**  
Ensures the base calculation works correctly without any discounts, preventing regressions in core logic when no special conditions apply.

---

### 2. Test Name: `applies SAVE10 coupon correctly`
**What it protects against:**  
Verifies that the 10% discount logic is applied accurately, preventing incorrect final amounts for percentage-based coupons.

---

### 3. Test Name: `applies FLAT50 coupon correctly`
**What it protects against:**  
Ensures fixed amount deductions work correctly and handles boundary conditions where the discount might exceed the subtotal (preventing negative totals).

---

### 4. Test Name: `throws error for invalid subtotal`
**What it protects against:**  
Prevents the application from processing invalid inputs like negative numbers or non-numeric values, ensuring robustness against bad data.

---

### 5. Test Name: `handles case-insensitive coupon codes`
**What it protects against:**  
Ensures users can input coupons in any case (e.g., 'save10', 'SAVE10') without valid coupons being rejected due to strict string matching.

---

## CI Pipeline (if implemented)
- Did CI pass successfully? Yes (Locally verified)
- GitHub Actions Run URL: <Link to your GitHub Actions run>

---

## Reflection (1–2 lines)
What is **one thing** you understood better about testing or CI after this workshop?

I learned how to write unit tests to catch edge cases and how to automate testing with GitHub Actions to ensure code quality on every push.
