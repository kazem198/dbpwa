const express = require("express");
const router = express.Router();
const Model_push = require("./model_push");
const webpush = require("web-push");

router.post("/", async (req, res) => {
  const allClient = await Model_push.find();
  console.log(allClient);

  for (const key of allClient) {
    const pushSubscription = {
      endpoint: key.endpoint,
      keys: {
        p256dh: key.p256dh,
        auth: key.auth,
      },
    };
    const payload = JSON.stringify({
      title: req.body.title,
      body: req.body.note,
    });
    // const vapidKeys = webpush.generateVAPIDKeys();

    webpush.setVapidDetails(
      // "mailto:example@yain.org",
      "http://127.0.0.1:8080",
      "BPC4bJt4ItlFgq6wgitzGeVLhrl3Q2Bxvg-5WGCRwFf03PvfP1UnJiRAhziLkMVu2QdmnUqmLUwFZRTeqAJ7Qgc",
      "g7-VV44BMVgXA2F_PfQcesK7MTInBdGxizBEpvIjuak"
    );

    webpush.sendNotification(pushSubscription, payload).catch((err) => {
      console.log(err);
    });
  }
});
router.get("/", async (req, res) => {
  res.status(200).send("ok");
});
module.exports = router;
