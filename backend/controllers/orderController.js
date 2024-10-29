import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

const deliveryCharge = 50;

// Placing User Order for Frontend using COD
const placeOrderCod = async (req, res) => {
    try {
        const newOrder = new orderModel({
            userId: req.body.userId,
            items: req.body.items,
            amount: req.body.amount + deliveryCharge,
            address: req.body.address,
            payment: true,
        });
        await newOrder.save();
        await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });

        res.json({ success: true, message: "Order placed successfully via COD." });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Failed to place order. Please try again." });
    }
};

export { placeOrderCod };
