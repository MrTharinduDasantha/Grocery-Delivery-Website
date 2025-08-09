import Address from "../models/address.model.js";

// Add address
const addAddress = async (req, res) => {
  try {
    const { address } = req.body;
    const userId = req.userId;
    await Address.create({ ...address, userId });

    res.json({ success: true, message: "Address added" });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

// Get address
const getAddress = async (req, res) => {
  try {
    const userId = req.userId;
    const addresses = await Address.find({ userId });

    res.json({ success: true, addresses });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

export { addAddress, getAddress };
