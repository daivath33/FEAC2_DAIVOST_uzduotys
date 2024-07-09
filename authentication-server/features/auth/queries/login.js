const UserModel = require("../../users/user-model");
const formatAuthResponse = require("../helpers/format-auth-response");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const newUser = await UserModel.findOne({ email });
    if (!newUser || !newUser.isCorrectPassword(password)) {
      return res.status(401).json({ message: "Incorrect email or password" });
    }
    const { token, user } = formatAuthResponse(newUser);
    return res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json({ message: "You sucessfuly signed in!", user, token });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error login user.", error: error.message });
  }
};

module.exports = login;
