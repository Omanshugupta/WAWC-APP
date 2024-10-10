const Content = require('../models/Content');


exports.addContent = async (req, res) => {
  try {
    const newContent = new Content(req.body);
    const content = await newContent.save();
    res.json(content);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};


exports.getContent = async (req, res) => {
  try {
    const content = await Content.find();
    res.json(content);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};
