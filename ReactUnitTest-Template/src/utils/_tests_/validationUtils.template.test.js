import {
  isValidEmail,
  isValidPassword,
  getPasswordStrength,
  isValidCreditCard,
  isValidUrl,
  isValidUsername,
} from "../validationUtils";

describe("validationUtils", () => {
  /**
   * EXERCISE 1 (Basic): Test the getPasswordStrength() function
   */
  test("should determine password strength", () => {
    // Test 1: Weak password (short, minimal variety)
    expect(getPasswordStrength("weak")).toBe("weak");

    // Test 2: Medium password (some variety, moderate length)
    expect(getPasswordStrength("Medium12")).toBe("medium");

    // Test 3: Strong password (long, uppercase, lowercase, numbers, special chars)
    expect(getPasswordStrength("Strong123!@#")).toBe("strong");
  });

  /**
   * EXERCISE 2 (Complex): Test credit card validation using Luhn algorithm
   */
  test("should validate credit cards using Luhn algorithm", () => {
    // Test 1: Valid card numbers
    expect(isValidCreditCard("4532015112830366")).toBe(true);
    expect(isValidCreditCard("4916338506082832")).toBe(true);
    expect(isValidCreditCard("4539578763621486")).toBe(true);

    // Test 2: Cards with spaces and dashes (should be cleaned and validated)
    expect(isValidCreditCard("4532 0151 1283 0366")).toBe(true);
    expect(isValidCreditCard("4532-0151-1283-0366")).toBe(true);

    // Test 3: Invalid card numbers
    expect(isValidCreditCard("1234567890123456")).toBe(false);
    expect(isValidCreditCard("1111111111111111")).toBe(false);

    // Test 4: Edge cases (too short, null)
    expect(isValidCreditCard("123")).toBe(false);
    expect(isValidCreditCard(null)).toBe(false);
  });

  /**
   * EXERCISE 3 (Complex): Test username validation with configurable options
   */
  test("should validate usernames with configurable options", () => {
    // Test 1: Default valid usernames
    expect(isValidUsername("john_doe123")).toBe(true);
    expect(isValidUsername("Alice")).toBe(true);

    // Test 2: Invalid - too short, starts with number or underscore
    expect(isValidUsername("ab")).toBe(false);
    expect(isValidUsername("123john")).toBe(false);
    expect(isValidUsername("_john")).toBe(false);

    // Test 3: Custom option - no underscores allowed
    expect(isValidUsername("john_doe", { allowUnderscore: false })).toBe(false);
    expect(isValidUsername("johndoe", { allowUnderscore: false })).toBe(true);

    // Test 4: Custom option - no numbers allowed
    expect(isValidUsername("john123", { allowNumbers: false })).toBe(false);
    expect(isValidUsername("johnsmith", { allowNumbers: false })).toBe(true);

    // Test 5: Custom length requirements
    expect(isValidUsername("ab", { minLength: 2 })).toBe(true);
    expect(isValidUsername("abcdefghijklmnopqrstuvwxyz", { maxLength: 10 })).toBe(false);
  });
});