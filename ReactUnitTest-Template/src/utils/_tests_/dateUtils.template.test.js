import {
  daysBetween,
  addDays,
  addMonths,
  addYears,
  isLeapYear,
  getDaysInMonth,
  isSameDay,
  isBefore,
  isAfter,
  isBetween,
} from "../dateUtils";

describe("dateUtils", () => {
  // ==================== STUDENT EXERCISES ====================
  // 1 Basic Test + 2 Complex Tests

  /**
   * EXERCISE 1 (Basic): Test the daysBetween() function
   *
   * HINTS:
   * - daysBetween(date1, date2) returns the number of days between two dates
   * - Create dates using: new Date("2024-03-01") and new Date("2024-03-15")
   * - The result should be 14 days
   * - The function returns absolute value (order doesn't matter)
   */
  test("should calculate days between two dates", () => {
    // TODO: Implement this test
    // Test: Calculate days between March 1 and March 15
    const date1 = new Date("2024-03-01");
    const date2 = new Date("2024-03-15");

    expect(daysBetween(date1, date2)).toBe(14);
    expect(daysBetween(date2, date1)).toBe(14); // order should not matter
  });

  /**
   * EXERCISE 2 (Complex): Test date arithmetic across month and year boundaries
   *
   * HINTS:
   * - addDays(date, days) adds days to a date
   * - Adding days across month boundary:
   *   - new Date("2024-01-30") + 5 days → February 4
   *   - Check: result.getMonth() === 1 (February), result.getDate() === 4
   *
   * - addMonths(date, months) adds months to a date
   * - Jan 31 + 1 month rolls to March (Feb doesn't have 31 days)
   *   - new Date("2024-01-31") + 1 month → March (month 2)
   *
   * - addYears(date, years) adds years to a date
   * - Leap year transition:
   *   - new Date("2024-02-29") + 1 year → March 1, 2025 (Feb 29 doesn't exist in 2025)
   *
   * - Negative arithmetic:
   *   - new Date("2024-03-15") - 20 days → February (month 1)
   */
  test("should handle date arithmetic across month and year boundaries", () => {
    // TODO: Implement this test
    // Test 1: Add 5 days to Jan 30 → should be Feb 4
    // Test 2: Add 1 month to Jan 31 → should roll to March
    // Test 3: Add 1 year to Feb 29 (leap year) → should be March 1
    // Test 4: Subtract 20 days from March 15 → should be in February

    // Test 1: Add 5 days to Jan 30 → Feb 4
    const jan30 = new Date("2024-01-30");
    const result1 = addDays(jan30, 5);

    expect(result1.getMonth()).toBe(1); // February
    expect(result1.getDate()).toBe(4);

    // Test 2: Jan 31 + 1 month → March
    const jan31 = new Date("2024-01-31");
    const result2 = addMonths(jan31, 1);

    expect(result2.getMonth()).toBe(2); // March

    // Test 3: Feb 29 2024 + 1 year → March 1 2025
    const leapDate = new Date("2024-02-29");
    const result3 = addYears(leapDate, 1);

    expect(result3.getFullYear()).toBe(2025);
    expect(result3.getMonth()).toBe(2); // March

    // Test 4: March 15 - 20 days → February
    const march15 = new Date("2024-03-15");
    const result4 = addDays(march15, -20);

    expect(result4.getMonth()).toBe(1); // February
  });

  /**
   * EXERCISE 3 (Complex): Test leap years and days in month calculations
   *
   * HINTS:
   * - isLeapYear(year) returns true/false
   *   - 2024 → true (divisible by 4)
   *   - 2023 → false (not divisible by 4)
   *   - 2000 → true (divisible by 400)
   *   - 1900 → false (divisible by 100 but NOT 400)
   *   - 2100 → false (divisible by 100 but NOT 400)
   *
   * - getDaysInMonth(date) returns number of days in that month
   *   - February 2024 (leap year) → 29 days
   *   - February 2023 (non-leap) → 28 days
   *   - January → 31 days
   *   - April → 30 days
   *   - December → 31 days
   */
  test("should validate leap years and days in month calculations", () => {
    // TODO: Implement this test
    // Test 1: Leap year tests (2024, 2023, 2000, 1900, 2100)
    // Test 2: Days in February for leap vs non-leap year
    // Test 3: Days in various months (Jan, April, December)
    // Leap year tests
    expect(isLeapYear(2024)).toBe(true);
    expect(isLeapYear(2023)).toBe(false);
    expect(isLeapYear(2000)).toBe(true);
    expect(isLeapYear(1900)).toBe(false);
    expect(isLeapYear(2100)).toBe(false);

    // Days in February
    expect(getDaysInMonth(new Date("2024-02-01"))).toBe(29);
    expect(getDaysInMonth(new Date("2023-02-01"))).toBe(28);

    // Days in other months
    expect(getDaysInMonth(new Date("2024-01-01"))).toBe(31);
    expect(getDaysInMonth(new Date("2024-04-01"))).toBe(30);
    expect(getDaysInMonth(new Date("2024-12-01"))).toBe(31);
  });
});
