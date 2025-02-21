const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const Comment = require('./models/Comment');
require('dotenv').config();

const app = express();
const PORT = 3000;

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

mongoose.connect(`mongodb+srv://pedrocontahf:${process.env.DB_PASSWORD}@cluster0.hvbxbj7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);

app.post('/save-comment', async (req, res) => {
    const { text } = req.body;
    const newComment = new Comment({ text });
    await newComment.save();
    res.json(newComment);
});

app.get('/get-comments', async (req, res) => {
    const comments = await Comment.find({});
    res.json(comments);
});

app.delete('/delete-comment/:id', async (req, res) => {
    const { id } = req.params;
    await Comment.findByIdAndDelete(id);
    res.json({ success: true });
});

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});