import mongoose from 'mongoose';


const Product = new mongoose.Schema({
    productname: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    brand: { type: String },
    price: { type: Number },
    discription: { type: String }
})

export default mongoose.model('Product', Product)