const express = require("express");
const router = express.Router();
const PostController = require("../controllers/PostController");

const {
  authentication,
  isAdmin,
  isSuperAdmin,
  isPostAuthor,
} = require("../middleware/authentication");
const upload = require("../middleware/upload");

router.post("/", authentication, upload.single("image"), PostController.create);
router.put("/:_id", authentication, isPostAuthor, PostController.update);
router.delete("/:_id", authentication, isPostAuthor, PostController.delete);
router.get("/", PostController.getAll);
router.get("/:_id", PostController.getById);
router.get("/name/:name", PostController.getByName);
router.put("/like/:_id", authentication, PostController.like);
router.put("/unlike/:_id", authentication, PostController.unlike);

module.exports = router;
