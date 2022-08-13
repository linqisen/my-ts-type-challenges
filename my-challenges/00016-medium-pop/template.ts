type Pop<T extends any[]> = T extends [...infer Rest, infer R] ? Rest : never
