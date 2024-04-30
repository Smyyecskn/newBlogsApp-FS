const { mongoose } = require("../configs/dbConnection");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password field must be required"],
      trim: true,
      set: (password) => passwordEncrypt(password),
    },

    email: {
      type: String,
      trim: true,
      required: [true, "Email field must be required"],
      unique: [true, "There is this email. Email field must be unique"],
      validate: [
        (email) => {
          const regexEmailCheck =
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
          return regexEmailCheck;
        },
        "Email type is not correct.",
      ],
    },

    firstname: {
      type: String,
      trim: true,
    },
    lastname: {
      type: String,
      trim: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    isStaff: {
      type: Boolean,
      default: false,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { collection: "users", timestamps: true }
);


module.exports = mongoose.model("User", UserSchema);