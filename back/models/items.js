import mongoose from 'mongoose'
const {Schema} = mongoose

const itemsSchema = new Schema({
    description: { type: String, required: true },
    checked: { type: Boolean, required: true},
    createdAt: { type: Date, default: Date.now},
    updatedAt: { type: Date, default: Date.now }
});

const Items = mongoose.model('items', itemsSchema);
export default Items
