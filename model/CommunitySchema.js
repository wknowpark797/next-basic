import mongoose from 'mongoose';

const communitySchema = new mongoose.Schema(
	{
		title: String,
		content: String,
		communityNum: Number,
	},
	{ collection: 'Community' }
);

const Community = mongoose.model('Counter', communitySchema);
export { Community };
