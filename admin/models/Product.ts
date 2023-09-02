import { Schema, model } from "mongoose";

// Define an interface for the product document
interface IProduct {
    title: string;
    description: string;
    price: number;
}

// Create a schema for the product document
const ProductSchema = new Schema<IProduct>({
    title: String,
    description: String,
    price: Number,
});

// Create a model for the product document
const Product = model<IProduct>('Product', ProductSchema);

