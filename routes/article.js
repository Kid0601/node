const router = express.Router();
const connection = require("../database");
router.get("/articles", (req, res) => {
  connection.execute(
    "SELECT * FROM `article_test`",
    function (err, results, fields) {
      res.json({ results });
    }
  );
});
router.get("/article/:article_no", (req, res) => {
  let article_no = req.params.article_no;
  connection.execute(
    "SELECT * FROM `article_test` WHERE `article_no` = ?",
    [article_no],
    function (err, results, fields) {
      res.json({ results });
    }
  );
});
// export default router;
