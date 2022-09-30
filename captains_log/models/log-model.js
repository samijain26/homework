const mongoose = require('mongoose')

const logSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    entry: {
      type: String,
      required: true,
    },
    
    broken: {
      type: Boolean,
      
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Log', logSchema)