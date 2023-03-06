const express = require("express");
const app = express();

app.get("/ht-hosting", function (req, res) {
  res.redirect("https://cp.ht-hosting.de/aff.php?aff=169");
});

app.listen(3000);
