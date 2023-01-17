type Length<T extends readonly any[]> = T['length']

/**
 * 1. Conditional types
 * Reference: https://www.typescriptlang.org/docs/handbook/2/conditional-types.html
 *
 * 2. Tuple
 * Reference: https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types
 *
 * 3. as const assertion
 * Reference: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-inference
 * > The as const suffix acts like const but for the type system, ensuring that all properties are assigned the literal type instead of a more general version like string or number.
 */
