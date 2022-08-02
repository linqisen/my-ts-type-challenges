type MyReadonly2<T, K extends keyof T = keyof T> = {
    readonly [A in K]: T[A];
} & {
    [P in Exclude<keyof T, K>]: T[P];
};
