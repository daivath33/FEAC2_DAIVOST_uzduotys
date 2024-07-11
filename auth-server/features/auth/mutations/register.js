const UserModel = require("../../users/user-model");
const formatAuthResponse = require("../helpers/format-auth-response");

const register = async (req, res) => {
  try {
    const user = req.body;
    const existingUser = await UserModel.findOne({ email: user.email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    const newUser = new UserModel(user);
    await newUser.save();
    return res.status(201).json(formatAuthResponse(newUser));
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error registering new user.", error: error.message });
  }
};

module.exports = register;
