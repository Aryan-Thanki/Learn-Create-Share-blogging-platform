// Import model
const Comment = require("../models/comment.model");

/**
 * Controller to get all comments
 * @param {object} req - Express.js request object
 * @param {object} res - Express.js response object
 * @returns {void}
 */
exports.getAllComments = (req, res) => {
  Comment.retrieveAllComments((err, data) => {
    // If an error occurs
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving comments.",
      });
    else res.send(data);
  });
};

/**
 * Controller to get create a new comment
 * @param {object} req - Express.js request object
 * @param {object} res - Express.js response object
 * @returns {void}
 */
exports.createComment = (req, res) => {
  //If no data is inserted, display error
  if (!req.body) {
    res.status(400).send({ message: "Content for creating comment is empty!" });
  }

  // Get new comment values
  const comment = new Comment({
    content: req.body.content,
    published: req.body.published,
    postID: req.body.postID,
    userID: req.body.userID,
  });

  // Insert the comment into the database
  Comment.createNewComment(comment, (err, data) => {
    //display error
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the comment.",
      });
    else res.send(data);
  });
};

/**
 * Controller to remove a comment by its ID
 * @param {object} req - Express.js request object
 * @param {object} res - Express.js response object
 * @returns {void}
 */
exports.removeByID = (req, res) => {
  //if no id is taken display error
  if (!req.params.commentID) {
    res.status(400).send({ message: "No id added" });
  }

  // Get the class ID
  const commentID = req.params.commentID;

  // Remove the comment from the database
  Comment.removeByID(commentID, (err, data) => {
    //display error
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the comment.",
      });
    else res.send(data);
  });
};

/**
 * Controller to get a comment by it's ID
 * @param {object} req - Express.js request object
 * @param {object} res - Express.js response object
 * @returns {void}
 */
exports.getByID = (req, res) => {
  //if no id is taken display error
  if (!req.params.commentID) {
    res.status(400).send({ message: "No id added" });
  }

  // Get the comment ID
  const commentID = req.params.commentID;

  // Get the comment from the database
  Comment.getByID(commentID, (err, data) => {
    //display error
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while getting the comment.",
      });
    else res.send(data);
  });
};

/**
 * Controller to get all comments made by a user
 * @param {object} req - Express.js request object
 * @param {object} res - Express.js response object
 * @returns {void}
 */
exports.getByUserID = (req, res) => {
  //if no user ID is taken display error
  if (!req.params.userID) {
    res.status(400).send({ message: "No ID added" });
  }

  // Get the userID
  const userID = req.params.userID;

  // Get the comments from the database
  Comment.getByUser(userID, (err, data) => {
    //display error
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while getting the comments.",
      });
    else res.send(data);
  });
};

/**
 * Controller to get a comment by it's parent post
 * @param {object} req - Express.js request object
 * @param {object} res - Express.js response object
 * @returns {void}
 */
exports.getByPostID = (req, res) => {
  //if no post ID is taken display error
  if (!req.params.postID) {
    res.status(400).send({ message: "No ID added" });
  }

  // Get the postID
  const postID = req.params.postID;

  // Get the comments from the database
  Comment.getByPost(postID, (err, data) => {
    //display error
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while getting the comments.",
      });
    else res.send(data);
  });
};
