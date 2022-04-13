import mongoose from 'mongoose';

const CartSchema = new mongoose.schema(
    {
        userId: { type: String, required: true },
        products: [
            {
                productId: { type: String },
                quantity: { type: Number, defualt: 1 },
            },
        ],
    },
    { timestamps: true }
);

const Cart = mongoose.model('Cart', CartSchema);
export default Cart;
