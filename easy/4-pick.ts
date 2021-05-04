// 1. K must be union of T keys 
// (as you can see, if K is not an union of T keys, it will show error, i.e. thats why @ts-expect-error is needed )
// 2. later for every type P in K (which is an union of T keys), we will create a key with type P,
// with type value of the type of that type value in T
type MyPick<T, K extends keyof T> = {
    [P in K]: T[P]
  }
