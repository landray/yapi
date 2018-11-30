const Router = require('koa-router');
const restc = require('restc');
const restcKoa = restc.koa2();
const mockServer = require('./mockServer');

const mockRouter = new Router({ prefix: '/mock' });

module.exports = mockRouter.all('*', restcKoa, mockServer);
