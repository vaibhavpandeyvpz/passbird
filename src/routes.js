const free = require('free-email-domains');
const disposables = require('disposable-email-domains');
const Joi = require('joi');
const router = require('koa-joi-router');
const zxcvbn = require('zxcvbn');

const routes = router();

routes.route({
  method: 'get',
  path: '/',
  async handler(ctx) {
    ctx.status = 200;
    ctx.body = {
      '/': ['GET'],
      '/email': ['POST'],
      '/password': ['POST'],
    };
  },
});

routes.route({
  method: 'post',
  path: '/email',
  validate: {
    body: {
      email: Joi.string().lowercase().email(),
    },
    type: 'form',
  },
  async handler(ctx) {
    const { email } = ctx.request.body;
    const domain = email.split('@').pop();
    let type;
    if (disposables.indexOf(domain) >= 0) {
      type = 'disposable';
    } else if (free.indexOf(domain) >= 0) {
      type = 'free';
    } else {
      type = 'business';
    }

    ctx.status = 200;
    ctx.body = {
      type,
      types: ['disposable', 'free', 'business'],
    };
  },
});

routes.route({
  method: 'post',
  path: '/password',
  validate: {
    body: {
      password: Joi.string(),
    },
    type: 'form',
  },
  async handler(ctx) {
    const { password } = ctx.request.body;
    const result = zxcvbn(password, null);
    ctx.status = 200;
    ctx.body = {
      feedback: result.feedback.warning || null,
      strength: {
        value: result.score + 1,
        min: 1,
        max: 5,
      },
      suggestions: result.feedback.suggestions,
    };
  },
});

module.exports = routes;
