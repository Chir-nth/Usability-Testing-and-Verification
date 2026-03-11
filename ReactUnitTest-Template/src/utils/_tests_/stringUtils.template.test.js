import {
  isPalindrome,
  toKebabCase,
  toCamelCase,
  toSnakeCase,
  extractEmails,
  extractNumbers,
  countWords,
  countOccurrences,
} from "../stringUtils";

describe("stringUtils", () => {
  /**
   * EXERCISE 1 (Basic): Test the isPalindrome() function
   */
  test("should check if string is a palindrome", () => {
    // Test 1: Simple palindrome
    expect(isPalindrome("racecar")).toBe(true);

    // Test 2: Palindrome with spaces and mixed case
    expect(isPalindrome("A man a plan a canal Panama")).toBe(true);

    // Test 3: Non-palindrome
    expect(isPalindrome("hello")).toBe(false);
  });

  /**
   * EXERCISE 2 (Complex): Test case format conversions
   */
  test("should convert between different case formats consistently", () => {
    // Test 1: camelCase to kebab-case
    expect(toKebabCase("myVariableName")).toBe("my-variable-name");

    // Test 2: camelCase to snake_case
    expect(toSnakeCase("getUserById")).toBe("get_user_by_id");

    // Test 3: kebab-case back to camelCase
    expect(toCamelCase("my-variable-name")).toBe("myVariableName");

    // Test 4: snake_case back to camelCase
    expect(toCamelCase("my_variable_name")).toBe("myVariableName");

    // Test 5: Complex conversions
    expect(toKebabCase("XMLHttpRequest")).toBe("xmlhttp-request");
    expect(toSnakeCase("myVariableName")).toBe("my_variable_name");
  });

  /**
   * EXERCISE 3 (Complex): Test data extraction from strings
   */
  test("should extract and process embedded data from strings", () => {
    const text =
      "Contact us at support@example.com or sales@company.org for orders over $500. Call 123-456-7890.";

    // Test 1: Extract emails from text
    const emails = extractEmails(text);
    expect(emails).toEqual(["support@example.com", "sales@company.org"]);

    // Test 2: Verify email count is 2
    expect(emails).toHaveLength(2);

    // Test 3: Extract numbers from text
    const numbers = extractNumbers(text);
    expect(numbers).toEqual([500, 123, 456, 7890]);

    // Test 4: Count words (should be 12)
    expect(countWords(text)).toBe(12);

    // Test 5: Count "or" occurrences (should be 5)
    expect(countOccurrences(text, "or")).toBe(5);
  });
});