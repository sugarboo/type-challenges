type TupleToObject<T extends readonly (string | number | symbol)[]> = {
  [P in T[number]]: P
}

/**
 * js translation
 */

function tupleToObject(array) {
  // if key's type (elements in array) not string, number or symbol, throw error

  const obj = {}

  array.forEach((element) => {
    obj[element] = element
  })

  return obj
}

/**
 * 1. Conditional types
 * Reference: https://www.typescriptlang.org/docs/handbook/2/conditional-types.html
 *
 * > When Flatten is given an array type, it uses an indexed access with number to fetch out string[]’s element type. Otherwise, it just returns the type it was given.
 *
 * 2. @ts-check notations
 * References: https://www.typescriptlang.org/docs/handbook/intro-to-js-ts.html#ts-check
 */
