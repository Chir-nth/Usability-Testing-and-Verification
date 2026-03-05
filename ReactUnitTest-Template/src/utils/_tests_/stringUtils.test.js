import { toCamelCase, toKebabCase, toSnakeCase } from "../stringUtils";

describe("String Utilities", () => {
    test("should convert between different cases formats consistently", () => {
        const camelCase = "myVariableName";
        const kebabCase = "my-variable-name";
        const snakeCase = "my_variable_name";

        //EASY WORDS
        expect(toKebabCase(camelCase)).toBe(kebabCase);
        expect(toSnakeCase(camelCase)).toBe(snakeCase);
        
        //HARD WORDS
        expect(toKebabCase("XMLHttpRequest")).toBe("xmlhttp-request");
        expect(toSnakeCase("getUserById")).toBe("get_user_by_id");
    });
});