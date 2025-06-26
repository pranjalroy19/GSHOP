const express = require("express");
const Razorpay = require("razorpay");
const router = express.Router();
const instance = new Razorpay({
  key_id: "rzp_test_qD26cTKNSxMO5U",
  key_secret: "ImucfX3l6atM1HPtrZPsycVh",
});
router.post("/create-order", async (req, res) => {
  const { amount } = req.body;
  const options = {
    amount: amount * 100,
    currency: "INR",
    receipt: `receipt_order_${Date.now()}`,
  };
  try {
    const order = await instance.orders.create(options);
    res.status(200).json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
module.exports = router;
