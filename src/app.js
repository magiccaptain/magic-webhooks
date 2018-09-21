import Koa2 from "koa";
import body from "koa-body";

const app = new Koa2();

app.use(body())
  .use(async (ctx, next) => {
    console.log(JSON.stringify(ctx.request.body, null, 2));
    ctx.body = "";
  });

export default app;










