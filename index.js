const express = require("express");
const contentType = "Content-Type";
const chinese = "text/html; charset=utf-8";
const app = express();
const setResHeaders = (res) => {
  res.setHeader(contentType, chinese);
};
// app.all("*",(req,res)=>{}) => 所有方法(get,post,put,delete),所有路徑
app.get("/", (req, res) => {
  setResHeaders(res);
  res.end("主頁面");
});
app.get("/home", (req, res) => {
  res.end("home page");
});
app.get("/request", (req, res) => {
  setResHeaders(res);

  res.setHeader("Server", "Kid's Express");
  res.end("要求的訊息內容");
  // console.log(req.method);
  // console.log(req.url);
  // console.log(req.httpVersion);
  // console.log(req.headers);
  // console.log(req.path);
  // console.log(req.query);
  // console.log(req.ip);
  // console.log(req.get("host"));
});
app.get("/article/:id([0-9]+)", (req, res) => {
  setResHeaders(res);
  // let id = req.params.id;
  // let page = "IG";
  // if (id === "CvZP-PIguWG") {
  //   page = "《浅草で一番おすすめしたい抹茶クレープ》";
  // } else if (id === "CvRz0e3Awmi") {
  //   page = "《ぷるんぷるんすぎるマシュマロアイス》";
  // }
  res.write(req.params.id);
  res.end();
});
app.get("/user/:name?", (req, res) => {
  setResHeaders(res);
  let name = req.params.name;
  if (name) {
    res.end(name);
  } else {
    res.end("guest");
  }
});
app.get("/files/*", (req, res) => {
  var filePath = req.params[0];
  res.send(`file path:${filePath}`);
});
app.listen(3002, () => {
  console.log("listening on http://localhost:3002");
});
