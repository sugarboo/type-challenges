type MyAwaited<T extends PromiseLike<any>> = T extends PromiseLike<infer K>
  ? K extends PromiseLike<any>
    ? MyAwaited<K>
    : K
  : never

/**
 * 1. Awaited
 * Reference: https://www.typescriptlang.org/docs/handbook/utility-types.html#awaitedtype
 *
 * 2. Promise
 *
 * 3. PromiseLike
 * Reference: https://microsoft.github.io/PowerBI-JavaScript/interfaces/_node_modules_typedoc_node_modules_typescript_lib_lib_es5_d_.promiselike.html
 */
