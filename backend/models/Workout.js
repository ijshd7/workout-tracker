const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let workoutSchema = new Schema({
  date: {
    type: String
  },
  name: {
    type: String
  },
  mobility: {
    type: String
  },
  warmup: {
    type: String
  },
  skill: {
    type: String
  },
  strength: {
    type: String
  },
  wod: {
    type: String
  },
  cooldown: {
    type: String
  },
}, {
  collection: 'workouts'
})
module.exports = mongoose.model('Workout', workoutSchema)