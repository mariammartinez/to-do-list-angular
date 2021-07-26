import mongoose from 'mongoose'
const {Schema} = mongoose

const listsSchema = new Schema({
    name: { type: String, required: true },
    createdAt: { type: Date, default: Date.now},
    items: [
        {type: mongoose.Schema.Types.ObjectId,ref:'Item'}
    ]
});

const Lists = mongoose.model('lists', listsSchema);
export default Lists
