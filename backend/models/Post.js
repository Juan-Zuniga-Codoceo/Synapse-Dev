const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    content: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    },
    status: {
        type: String,
        default: 'published'
    },
    metaTitle: {
        type: String,
        default: ''
    },
    metaDescription: {
        type: String,
        default: ''
    },
    focusKeyword: {
        type: String,
        default: ''
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Post', postSchema);
