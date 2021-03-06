const debug = require('debug')('passbird:app');
const Koa = require('koa');
const cors = require('@koa/cors');
const routes = require('./routes');

const app = new Koa();

app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.get('X-Response-Time');
  debug(`${ctx.method} ${ctx.url} ${ctx.status} - ${rt}`);
});

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

app.use(cors());
app.use(routes.middleware());

module.exports = app;
