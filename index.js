import express from "express";

const app = express();

app.listen(5001, () => {
  console.log("api run on 5001");
});

app.get("/", (req, res) => res.json("api is run"));
