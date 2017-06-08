import mongoose from 'mongoose';
let todoShema = new mongoose.Schema({
	text:String
});
export default mongoose.model('Todo', todoShema);