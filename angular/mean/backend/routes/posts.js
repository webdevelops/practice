const express = require('express');
const multer = require('multer');

const Post = require('../models/post');

const router = express.Router();

const MIME_TYPE_MAP = {
  'image/png': 'png',
  'image/jpeg': 'jpg',
  'image/jpg': 'jpg' 
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const isValid = MIME_TYPE_MAP[file.mimetype];
    const error = new Error('Invalid mime type');

    if (isValid) {
      error = null;
    }

    cb(error, '/backend/images');
  },
  filename: (req, file, cb) => {
    const name = file.originalname.toLowerCase().split(' ').join('-');
    const ext = MIME_TYPE_MAP[file.mimetype];
    cb(null, name + '-' + new Date() + '.' + ext);
  }
});

router.post("", multer(storage).single('image'), (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });
  // console.log('post', post)

  post.save().then(createdPost => {
    res.status(201).json({
      message: "Post added successfully!",
      postId: createdPost._id
    })
  }
  );
});

router.get("", (req, res, next) => {
  Post.find()
    .then(documents => {
    // console.log("documents", documents)
      res.status(200).json({
        message: "Posts fetched successfully!",
        posts: documents
      })
    })
    .catch(err => console.log('Error: ', err));
});

router.get('/:id', (req, res, next) => {
  Post.findById(req.params.id).then(post => {
    if (post) {
      res.status(200).json(post);
    
    } else {
      res.status(404).json({message: "Post not found!"});
    }
  })
});

router.put('/:id', (req, res, next) => {
  const post = new Post({
    _id: req.body.id,
    title: req.body.title,
    content: req.body.content
  });

  Post.updateOne({ _id: req.params.id }, post)
    .then(response => {
      // console.log('response-server', response);
      res.status(200).json({message: 'Update succsessful!'});
    });
});

router.delete('/:id', (req, res, next) => {
  Post.deleteOne({ _id: req.params.id }).then(res => console.log("_id", res));
  res.status(200).json({ message: "Post deleted!!!" });
});

module.exports = router;