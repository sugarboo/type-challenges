type MyExclude<T, U> = T extends U ? never : T

/**
 * 1. Exclude
 * Reference: https://www.typescriptlang.org/docs/handbook/utility-types.html#excludeuniontype-excludedmembers
 *
 * 2. Distributive Conditional Types
 * Reference: https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#distributive-conditional-types
 */
