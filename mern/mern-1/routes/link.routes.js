const { Router } = require('express');
const config = require('config');
const shortid = require('shortid');
const router = Router();

const Link = require('../models/Link');
const authMiddleware = require('../middleware/auth.middleware');

router.post('/generate', authMiddleware, async (req, res) => {
  try {
    const { from } = req.body;
    const existing = await Link.findOne({ from });
    
    if (existing) {
      return res.json({ link: existing });
    }
    
    const baseUrl = config.get('baseUrl');
    const code = shortid.generate();
    const to = baseUrl + '/t/' + code;
    const link = new Link({
      code, from, to, owner: req.user.userId
    });
    
    await link.save();
    res.status(201).json({ link });
    
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong, try again.' });
  }
});

router.get('/', authMiddleware, async (req, res) => {
  try {
    const links = await Link.find({ owner: req.user.userId });
    res.json(links);

  } catch (err) {
    res.status(500).json({ message: 'Something went wrong, try again.' });
  }
});

router.get('/:id', authMiddleware, async (req, res) => {
  try {
    const link = await Link.findById(req.params.id);
    res.json(link);

  } catch (err) {
    res.status(500).json({ message: 'Something went wrong, try again.' });
  }
});

module.exports = router;