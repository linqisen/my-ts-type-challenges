type Flatten<Item> = Item extends any[]
    ? Item extends [infer First, ...infer Rest]
        ? [...Flatten<First>, ...Flatten<Rest>]
        : []
    : [Item];
