type LengthOfString<
    S extends string,
    Arr extends unknown[] = []
> = S extends `${infer A}${infer Rest}` ? LengthOfString<Rest, [...Arr, A]> : Arr["length"];
