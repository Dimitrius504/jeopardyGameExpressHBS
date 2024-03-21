// models/admin.js
const mongoose = require('mongoose');
const plm = require('passport-local-mongoose');

const adminSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        // required: true,
        minLength: 8
    }
});

adminSchema.plugin(plm);

adminSchema.index({ username: 'text'});

module.exports = mongoose.model('Admin', adminSchema);
