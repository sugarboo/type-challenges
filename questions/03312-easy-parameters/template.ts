type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer X) => any ? X : never

/**
 * 1. infer keyword
 * Reference:
 *  - https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#inferring-within-conditional-types
 *  - https://github.com/microsoft/TypeScript/pull/24897
 */
