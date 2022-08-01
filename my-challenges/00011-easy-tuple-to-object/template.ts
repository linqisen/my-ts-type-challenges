type TupleToObject<T extends readonly (string | number)[]> = {
    [k in T[number]]: k;
};
