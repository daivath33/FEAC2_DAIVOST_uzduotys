const UserModel = require("../../users/user-model");

const getProfile = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const user = await UserModel.findById(id);
    if (!user) {
      return res.status(401).json({ message: "User not exists" });
    }

    return res.status(200).json({ user });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error getting user profile.", error: error.message });
  }
};

module.exports = getProfile;
