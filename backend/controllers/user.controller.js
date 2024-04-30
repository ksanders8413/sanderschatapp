import User from "../models/user.model.js";

export const getUsersForSideBar = async function(req, res) {
  try {
    const loggedInUserId = req.user._id;
    
    const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password")

    res.status(200).json(filteredUsers);
  } catch (error) {
    console.error("error in getUser4sidebar controller bro", error.message);
    res.status(500).json({ error: "internal server error" });
  }
};

