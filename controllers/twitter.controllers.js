import { twitterClient } from "../utils/index.js";
export const createTweet = async (req, res) => {
  try {
    const { message } = req.body;
    if (!message)
      return res.status(400).json({ error: "All Field are required!" });

    const response = await twitterClient.v2.tweet(message);
    return res.status(201).json({
      message: "Tweeted Successfully!",
      data: response.data,
    });
  } catch (err) {
    return res.status(500).json({ error: err });
  }
};

export const getTweets = async (req, res) => {
  try {
    const user = await twitterClient.currentUserV2();
    const response = await twitterClient.v2.user(user.data.id);
    console.log("Retrieved tweets:", response.data);
  } catch (err) {
    return res.status(500).json({ error: err });
  }
};

export const deleteTweet = async (req, res) => {
  try {
    const { id } = req.body;
    if (!id) return res.status(400).json({ error: "All Field are required!" });
    const response = await twitterClient.v2.deleteTweet(id);
    return res.status(200).json({
      message: "Tweet Deleted Successfully!",
    });
  } catch (err) {
    return res.status(500).json({ error: err });
  }
};
