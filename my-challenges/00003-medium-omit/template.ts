type MyOmit<T, K extends keyof T> = {
    [p in Exclude<keyof T, K>]: T[p];
};
