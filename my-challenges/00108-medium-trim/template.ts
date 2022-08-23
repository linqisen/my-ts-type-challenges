type Space1 = " " | "\n" | "\t";
type Trim<S extends string> = S extends `${Space1}${infer Rest}`
    ? Trim<Rest>
    : S extends `${infer R2}${Space1}`
    ? Trim<R2>
    : S;
