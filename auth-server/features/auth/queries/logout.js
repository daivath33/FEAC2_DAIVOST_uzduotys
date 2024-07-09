const logout = async (req, res) => {
  try {
    console.log("LOGOUT USER");
    res.clearCookie("access_token");
    res.status(200).json("User has been logged out!");
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "Error logout user.", error: error.message });
  }
};

module.exports = logout;
