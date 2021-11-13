const router = require("express").Router();
const connection = require("../database.js");

module.exports = router;

// Create Comment
router.post('/createComment', (req, res) => {

    var comment = req.body.comment;
    const createCommentQuery = `
      INSERT INTO comments(comment)
      VALUES ($1);
          `;

    connection.query(createCommentQuery, [comment], (error, results) => {
        if (error) {
            console.log(error);
            res.status(500).json({ error: 'Error while creating comment' });
        } else {
            console.log(results);
            if (results.rowCount === 1) {
                res.status(200).json({ message: 'Successfully created comment' });
            } else {
                res.status(404).json({ error: `Unable to create comment ${comment}` });
            }
        }
    });
});