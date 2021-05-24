const express = require("express");
const router = express.Router();
const Model_push = require("./model_push");
const webpush = require("web-push");

router.post("/", async (req, res) => {
  const { endpoint, auth, p256dh } = req.body;
  console.log(endpoint);

  const push = new Model_push({
    endpoint,
    auth,
    p256dh,
  });
  await push.save();
  return res.status(200).send(push);
});

module.exports = router;
