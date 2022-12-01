type MyReadonly<T> = {
  readonly [P in keyof T]: T[P]
}

/**
 * 1. Readonly<Type>
 * Reference: https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype
 *
 * 2. readonly and const modifiers
 * Reference: https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes-func.html#readonly-and-const
 *
 * 3. Indexed Access Types
 * Reference: https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html
 *
 * 4. keyof Type Operator
 * Reference: https://www.typescriptlang.org/docs/handbook/2/keyof-types.html
 */
