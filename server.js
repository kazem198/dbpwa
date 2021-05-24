require("./db");
const { json } = require("express");
const express = require("express");
const app = express();
const Router = require("./routes");
const Router_Push = require("./routes_push");
const Router_Push_Send = require("./routes_push_Send");

app.use(json());
app.use("/api/pwa", Router);
app.use("/api/pwa/push", Router_Push);
app.use("/api/pwa/push/send", Router_Push_Send);

app.listen(3003, () => {
  console.log("port 3003");
});
