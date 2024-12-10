const express = require("express");
const app = express();

function FirstMiddleWare(req, res, next) {
  console.log("FirstMiddleWare");
  next();
}




app.use("/second",FirstMiddleWare, (req, res, next) => {
  console.log("SecondMiddleware");
 
  next();
});

app.get("/", (req, res) => {
  console.log("DP");
  res.json({ msg: "Hello server!" });
  
});

app.get("/second", (req, res) => {
  console.log("Darshiit");
  res.json({ msg: "hiii " });
});

app.use((err, req, res, next) => {
  console.log("errr");
  res.json({
    msg: "app fail",
  });
});

app.get("/third", (req, res) => {
  console.log("prajapati");
  res.json({ msg: "hiii " });
});
app.listen(3000);
