require('dotenv').config();
const config = {
  SERVICE_NAME: require("../../package.json").name,
  PORT: Number(process.env.PORT) || 4001,
  NODE_ENV: process.env.NODE_ENV || "development",
  LOG_LEVEL: process.env.LOG_LEVEL || "info",
  REDIS_URL: process.env.REDIS_URL,
  ALLOWED_ORIGINS: process.env.ALLOWED_ORIGINS,
};

module.exports = { config };
