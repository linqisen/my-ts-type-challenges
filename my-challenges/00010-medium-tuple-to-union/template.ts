type TupleToUnion<T extends any[]> = T extends [infer A, ...infer Rest]
    ? A | TupleToUnion<Rest>
    : never;
