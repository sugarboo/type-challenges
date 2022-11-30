type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}

/**
 * js translation
 */

function myPick(todo, keys) {
  const obj = {}

  keys.forEach((key) => {
    if (key in todo)
      obj[key] = todo[key]
  })

  return obj
}

/**
 * 1. Pick<Type, Keys>
 * Reference: https://www.typescriptlang.org/docs/handbook/utility-types.html#picktype-keys
 *
 * 2. Indexed Access Types
 * Reference: https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html
 *
 * 3. Mapped Types
 * Reference: https://www.typescriptlang.org/docs/handbook/2/mapped-types.html
 *
 * 4. Extends Types
 * Reference: https://www.typescriptlang.org/docs/handbook/2/objects.html#extending-types
 *
 * 5. keyof Type Operator
 * Reference: https://www.typescriptlang.org/docs/handbook/2/keyof-types.html
 */
