const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

// ✅ REGISTER
router.post("/register", async (req, res) => {
  console.log("Register request:", req.body); // 👈 log incoming data

  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString(),
  });

  try {
    const savedUser = await newUser.save();
    console.log("User registered:", savedUser); // 👈 log saved user
    res.status(201).json(savedUser);
  } catch (err) {
    console.error("Registration error:", err); // 👈 log full error
    res.status(500).json({ message: "Server error", error: err.message }); // 👈 show error
  }
});

// ✅ LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      console.log("❌ Email not found:", req.body.email);
      return res.status(401).json({ message: "Wrong email!" });
    }

    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SEC
    );
    const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

    if (OriginalPassword !== req.body.password) {
      console.log("❌ Wrong password. Expected:", OriginalPassword, "Got:", req.body.password);
      return res.status(401).json({ message: "Wrong password!" });
    }

    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SECRET,
      { expiresIn: "3d" }
    );

    const { password, ...others } = user._doc;
    console.log("✅ Login successful for:", user.email);
    res.status(200).json({ ...others, accessToken });
  } catch (err) {
    console.error("❌ Login error:", err);  // 🛠 This will show real error
    res.status(500).json({ message: "Server error", error: err.message });
  }
});
module.exports = router;