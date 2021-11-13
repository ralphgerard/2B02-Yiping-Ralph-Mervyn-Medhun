const router = require("express").Router();
const connection = require("../database.js");

router.post("/createpost", (req, res) => {
  var post_title = req.body.post_title;
  var post_content = req.body.post_content;
  var userid = req.body.userid;
  const createPostQuery = `
  INSERT INTO posts(post_title, post_content, userid)
  VALUES ($1, $2, $3);
      `;

  connection.query(
    createPostQuery,
    [post_title, post_content, userid],
    (error, results) => {
      if (error) {
        console.log(error);
        res.status(500).json({ error: "Error while posting" });
      } else {
        console.log(results);
        if (results.rowCount === 1) {
          res.status(200).json({ message: "Successfully posted" });
        } else {
          res.status(404).json({ error: `Unable to create post` });
        }
      }
    }
  );
});


module.exports = router;