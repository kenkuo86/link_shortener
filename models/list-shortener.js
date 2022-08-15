const mongoose = require('mongoose')
const Schema = mongoose.Schema

const linkShortenerSchema = new Schema({
  originalLink: {
    type: String,
    required: true
  },
  transferredCode: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('linkShortener', linkShortenerSchema)