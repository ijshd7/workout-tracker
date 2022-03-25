const express = require('express');
const workoutRoute = express.Router();
// model
let WorkoutModel = require('../models/Workout');
workoutRoute.route('/create-workout').post((req, res, next) => {
  WorkoutModel.create(req.body, (error, data) => {
  if (error) {
    return next(error)
  } else {
    res.json(data)
  }
})
});
workoutRoute.route('/').get((req, res, next) => {
    WorkoutModel.find((error, data) => {
     if (error) {
       return next(error)
     } else {
       res.json(data)
     }
   })
 })
workoutRoute.route('/edit-workout/:id').get((req, res, next) => {
   WorkoutModel.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
// Update
workoutRoute.route('/update-workout/:id').put((req, res, next) => {
  WorkoutModel.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data)
      console.log('Workout successfully updated!')
    }
  })
})
// Delete
workoutRoute.route('/delete-workout/:id').delete((req, res, next) => {
  WorkoutModel.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
module.exports = workoutRoute;