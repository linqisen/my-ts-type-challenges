type AppendArgument<Fn, A> = Fn extends (...args: infer Q) => infer Res
    ? (...args: [...Q, A]) => Res
    : never;
