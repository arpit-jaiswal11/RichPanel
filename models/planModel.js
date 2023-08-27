const mongoose = require('mongoose');

const planSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  mPrice: {
    type: Number,
    required: true,
  },
  yPrice: {
    type: Number,
    required: true,
  },
  vQuality: {
    type: String,
    enum: ['Good', 'Better', 'Best'],
    required: true,
  },
  res: {
    type: String,
    enum: ['480p', '1080p', '4K+HDR'],
    required: true,
  },
  numDevices: {
    type: Number,
    required: true,
  },
  devices:{
    type: String,
    required: true,
  }
});

const Plan = mongoose.model('Plan', planSchema);

module.exports = Plan;
