'use strict';

/**
 * titan router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::titan.titan');
