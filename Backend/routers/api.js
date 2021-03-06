const router = require("express").Router();
const commentsRouter = require("./comments");
const communitiesRouter = require("./communities");
const likeableRouter = require("./likeable");
const likesRouter = require("./likes");
const postsRouter = require("./post");
const usersRouter = require("./comments");
var cors = require('cors');
router.use(cors());

router.use("/comments", commentsRouter);
router.use("/communities", communitiesRouter);
router.use("/likeable", likeableRouter);
router.use("/likes", likesRouter);
router.use("/post", postsRouter);
router.use("/users", usersRouter);

module.exports = router;
