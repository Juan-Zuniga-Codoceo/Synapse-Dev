const mongoose = require('mongoose');

const knowledgeChunkSchema = new mongoose.Schema({
  content: { 
    type: String, 
    required: true 
  },
  embedding: { 
    type: [Number], 
    required: true 
  }
}, { 
  timestamps: true 
});

module.exports = mongoose.model('KnowledgeChunk', knowledgeChunkSchema);
