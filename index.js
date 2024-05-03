const express = require("express");
const contentType = "Content-Type";
const chinese = "text/html; charset=utf-8";
const app = express();
// app.all("*",(req,res)=>{}) => 所有方法(get,post,put,delete),所有路徑
app.get("/", (req, res) => {
  res.setHeader(contentType, chinese);
  res.end("主頁面");
});
app.get("/home", (req, res) => {
  res.end("home page");
});
app.listen(3002, () => {
  console.log("listening on http://localhost:3002");
});
