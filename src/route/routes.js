const combine = require('koa-combine-routers');

const aRoutes = require('./aRoutes');

const bRoutes = require('./bRoutes');

module.exports = combine(aRoutes, bRoutes)