type Includes<T extends readonly any[], U> = T extends [infer R, ...infer Rest]
    ? IsEqual<U, R> extends true
        ? true
        : Includes<Rest, U>
    : false;

type IsEqual<A, B> = (<T>() => T extends A ? true : false) extends <
    T
>() => T extends B ? true : false
    ? true
    : false;
