const router = require("express").Router();
const commentsRouter = require("./comments");
const communitiesRouter = require("./communities");
const likeableRouter = require("./likable");
const likesRouter = require("./likes");
const postsRouter = require("./post");
const usersRouter = require("./comments");

router.use("/comments", commentsRouter);
router.use("/communities", communitiesRouter);
router.use("/likeable", likeableRouter);
router.use("/likes", likesRouter);
router.use("/post", postsRouter);
router.use("/users", usersRouter);
module.exports = router;
