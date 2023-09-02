import { Schema, model } from "mongoose"

const ProductSchema = new Schema({
    title: {type: String, require: true},
    description: String,
    price: {type: Number, require: true}
});

const Product = model('Product', ProductSchema);

