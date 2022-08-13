type Last<T extends any[]> = T extends [...infer Rest, infer R] ? R : never;
