const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  coursesActive: [
    {
        course: {type: String, default: ''},
        percentage: {type : Number, default: 0}
    }
  ],
   coursesCompleted: [
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }
   ],
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
