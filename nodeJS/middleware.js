// middleware pattern (chain of responsibillity)

// o primeiro param é um objeto que iremos passar os dados
// o segundo param é a função que irá disparar o próximo passo da cadeia
const passo1 = (ctx, next) => {
    ctx.valor1 = 'mid1';
    next()
}

const passo2 = (ctx, next) => {
    ctx.valor2 = 'mid2';
    next()
}

// a próxima função, no contexto do middware, não chamará o próximo passp
const passo3 = ctx => ctx.valor3 = 'mid3';

const exec = (ctx, ...middlewares) => {
    const execPasso = indice => {
        middlewares && indice < middlewares.length &&
            middlewares[indice](ctx, () => execPasso(indice + 1))
    }
    execPasso(0);
}

const ctx = {}
exec(ctx, passo1, passo2, passo3);
exec(ctx, passo2, passo3, passo1);
exec(ctx, passo3, passo2, passo1);
console.log(ctx);