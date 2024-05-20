const Redis = require("ioredis");
const redis = new Redis({
    host: "redis-12095.c292.ap-southeast-1-1.ec2.redns.redis-cloud.com",
    // host: process.env.HOST_REDIS,
    port: 12095,
    password: "Kidj2Z3nGgi4AxFataz0SQLZJPOeDgEi",
    // password: process.env.PASS_REDIS,
});

module.exports = redis;
