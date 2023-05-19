const {Schema, Types, model} = require('mongoose');

// User Schema
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    email: {
      type: String,
      unique: true,
      required: true,
      match:[

        // Email validation Regex. ^ and $ are anchors that indicate the start and end of the string. Ensures the entire string is matched without exceptions.
        // [\w-\.]+ matches one or more letters, digits, hypens, and periods for the name portion of the email address.
        // @ has to match the @ symbol.
        // ([\w-]+\.)+ matches one or more occurrences of characters, hyphens, and followed by a period. URL portion
        // [\w-]{2,4} matches between 2 and 4 characters or hyphens. represents the .com portion

        /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        "Please use a valid email",
      ],
    },
    thoughts: [
      {
          type: Schema.Types.ObjectId,
          ref: "Thought",
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    toJSON:{
      virtuals: true,
    },
    id: false,
  }
);

userSchema.virtual("friendCount").get(function() {
  return this.friends.length;
});

// Create user model with userSchema

const User = model('User', userSchema);

module.exports = User;