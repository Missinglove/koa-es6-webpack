//const koa = require('koa');
import koa from 'koa';

//const path = require('path');
import path from 'path';

//const statics = require('koa-static');
import statics from 'koa-static';

const app = new koa();

import helmet from 'koa-helmet';
//const helmet = require('koa-helmet');

import router from './route/routes';
//const router = require('./route/routes');

app.use(helmet()); //启用安全帽

app.use(statics(path.join(__dirname, './public'))) //拼接路径

app.use(router()); //启用路由

app.listen(3000); //监听端口