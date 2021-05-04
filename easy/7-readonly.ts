type MyReadonly<T> = {
  // 1. we will create an union of keys of T,
  // 2. for every type in union of keys of T, it has the type value of that key in T, but now readonly.
  readonly [P in keyof T]: T[P]
}
