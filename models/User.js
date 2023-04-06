const { Schema, model } = require('mongoose');
const Thought = require('./Thought');
// Schema to create User model
const userSchema = new Schema(
  {
    username: {type: String, required: true, trim:true, unique:true},
    email: {type: String, required:true, unique:true},
    thoughts:[
    {
      type: Schema.Types.ObjectId,
      ref: 'Thought',
    }],
    friends: [{
      type: Schema.Types.ObjectId,
      ref: 'User',
    }]
  },
  {
      toJSON: {
      virtuals: true,
    },
    id: false,
  }

);

// Create a virtual property `friendCount` that gets and sets the user's friend's count
userSchema
  .virtual('friendCount')
  // Getter to get the friend count
  .get(function () {
    if (this.friends.length)
    {return `${this.friends.length}`;}
    
  })
  // Setter to set the friendCount
  .set(function (v) {
    this.set(v);
  });

// Initialize our User model
const User = model('user', userSchema);

module.exports = User;
