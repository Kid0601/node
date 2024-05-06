// const articleRouter = require("./routes/article");
const express = require("express");
const contentType = "Content-Type";
const chinese = "text/html; charset=utf-8";
const app = express();
const { singers } = require("./singers.json");
const router = express.Router();
const setResHeaders = (res) => {
  res.setHeader(contentType, chinese);
};
// app.all("*",(req,res)=>{}) => 所有方法(get,post,put,delete),所有路徑
app.get("/", (req, res) => {
  setResHeaders(res);
  res.end("主頁面");
});
// app.get("/home", (req, res) => {
//   res.end("home page");
// });
// app.get("/request", (req, res) => {
//   setResHeaders(res);

//   res.setHeader("Server", "Kid's Express");
//   res.end("要求的訊息內容");
//   console.log(req.method);
//   console.log(req.url);
//   console.log(req.httpVersion);
//   console.log(req.headers);
//   console.log(req.path);
//   console.log(req.query);
//   console.log(req.ip);
//   console.log(req.get("host"));
// });

// 限定id為數字
// app.get("/article/:id([0-9]+)", (req, res) => {
//   setResHeaders(res);
//   // let id = req.params.id;
//   // let page = "IG";
//   // if (id === "CvZP-PIguWG") {
//   //   page = "《浅草で一番おすすめしたい抹茶クレープ》";
//   // } else if (id === "CvRz0e3Awmi") {
//   //   page = "《ぷるんぷるんすぎるマシュマロアイス》";
//   // }
//   res.write(req.params.id);
//   res.end();
// });

// 不完全動態路由
// app.get("/user/:name?", (req, res) => {
//   setResHeaders(res);
//   let name = req.params.name;
//   if (name) {
//     res.end(name);
//   } else {
//     res.end("guest");
//   }
// });

// 不限制
// app.get("/files/*", (req, res) => {
//   var filePath = req.params[0];
//   res.send(`file path:${filePath}`);
// });

// 利用json呈現簡易html
// app.get("/singer/:id.html", (req, res) => {
//   let id = req.params.id;
//   let result = singers.find((singer) => {
//     if (singer.id === parseInt(id)) {
//       return true;
//     }
//   });
//   if (!result) {
//     res.statusCode = 404;
//     res.end("<h1>not Found</h1>");
//   }
//   setResHeaders(res);
//   res.end(`
//     <!DOCTYPE html>
//     <html lang="en">
//     <head>
//       <meta charset="UTF-8">
//       <meta name="viewport" content="width=device-width, initial-scale=1.0">
//       <title>${result.singer_name} Page</title>
//     </head>
//     <body>
//       <h1>${result.singer_name}</h1>
//       <img src="${result.singer_img}" alt="">
//     </body>
//     </html>
//   `);
// });

// const db = require("./database");
// app.get("/", function (req, res) {
//   db.execute("SELECT * FROM article_test")
//     .then((data) => {
//       res.send(data);
//       res.end(data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // 允許所有來源的請求，也可以指定特定的來源
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE"); // 允許的HTTP方法
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization"); // 允許的標頭
  next();
});
const connection = require("./database");
// app.use("/api/article", articleRouter);
app.use("/article/:article_no", (req, res) => {
  let article_no = req.params.article_no;
  connection.execute(
    "SELECT * FROM `article_test` WHERE `article_no` = ?",
    [article_no],
    function (err, results, fields) {
      res.json({ results });
    }
  );
});
app.use("/articles", (req, res) => {
  connection.execute(
    "SELECT * FROM `article_test`",
    function (err, results, fields) {
      res.json({ results });
    }
  );
});
app.listen(3002, () => {
  console.log("listening on http://localhost:3002");
});
