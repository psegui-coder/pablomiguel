const mongoose = require('mongoose')

const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    default: 1,
  },
  price: {
    type: Number,
    enum: [1,2,3,4,5,6,7]
  },
  prating: {
    type: Number,
    enum: [1,2,3,4,5,6,7],
    default: 1
  },
  phone: {
    type: Number,
  },
  image: {
    type: String
  }
})

module.exports = mongoose.model('restaurant', restaurantSchema)