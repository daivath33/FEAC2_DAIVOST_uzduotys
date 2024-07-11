const UserModel = require("../../users/user-model");

const getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.find();
    if (users.length === 0) {
      return res.status(400).json({ message: "No users" });
    }

    return res.status(200).json(users);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error getting users.", error: error.message });
  }
};

module.exports = getAllUsers;
