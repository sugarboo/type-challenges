// type First<T extends any[]> = any

// Solution 1
// type First<T extends any[]> = T extends [] ? never : T[0]

// Solution 2
// type First<T extends any[]> = T['length'] extends 0 ? never : T[0]

// Solution 3
// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never

// Solution 4
type First<T extends any[]> = T extends [infer First, ...infer Rest] ? First : never

/**
 * 1. Coditional Types
 * Reference: https://www.typescriptlang.org/docs/handbook/2/conditional-types.html
 */

/**
 * 2. infer keyword
 * Reference: https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#inferring-within-conditional-types
 */
