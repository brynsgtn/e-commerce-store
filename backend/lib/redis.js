import Redis from "ioredis"
import dotenv from "dotenv";

dotenv.config();


export const redis = new Redis(process.env.UPSTASH_REDIS_URL, {
  tls: {}, // force TLS
  maxRetriesPerRequest: null, // recommended for serverless
  enableReadyCheck: false,    // Upstash doesn’t support INFO command
  retryStrategy(times) {
    return Math.min(times * 50, 2000); // reconnect if dropped
  },
});
