const Redis = require("ioredis");
const redis = new Redis({
    host: process.env.HOST_REDIS,
    port: 12095,
    password: process.env.PASS_REDIS,
});

module.exports = redis;
