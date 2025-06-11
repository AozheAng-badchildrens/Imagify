import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  creditBalance: { type: Number, default: 5 },
});

const userModel = mongoose.models.user || mongoose.model("user", userSchema);

export default userModel;

// http://localhost:4000/api/user/register
// http://localhost:4000/api/user/login
