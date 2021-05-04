// 1. we are making sure the type provided is a readonly array that wont change (i.e. `as const`)
// 2. then for each P in type of type of specific value in T (i.e. type on T[number]), we will create key with type P,
// with value of type P.
type TupleToObject<T extends readonly any[]> = {
  [P in T[number]]: P
}
