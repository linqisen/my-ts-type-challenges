type DeepReadonly<T> = {
    readonly [p in keyof T]: T[p] extends Object
        ? T[p] extends Function
            ? T[p]
            : DeepReadonly<T[p]>
        : T[p];
};
