const mongoose = require("mongoose");
const User = require("./models/user"); // adjust the path if needed

async function resetPassword() {
  await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust"); // update DB name if different

  const user = await User.findOne({ username: "delta-student" });
  if (!user) {
    console.log("User not found");
    return;
  }

  await user.setPassword("hello"); // set your new password
  await user.save();

  console.log("Password reset successfully!");
  mongoose.connection.close();
}

resetPassword();
