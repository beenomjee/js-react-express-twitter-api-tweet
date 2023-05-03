import { TwitterApi } from "twitter-api-v2";
import dotenv from "dotenv";
dotenv.config({});

let twitterClient = new TwitterApi({
  appKey: process.env.appKey,
  appSecret: process.env.appSecret,
  clientId: process.env.clientId,
  clientSecret: process.env.clientSecret,
  accessToken: process.env.accessToken,
  accessSecret: process.env.accessSecret,
});

twitterClient = twitterClient.readWrite;
export { twitterClient };
