import mongoose from 'mongoose';

// mongoose의 Schema 생성자 함수로 글 저장 객체에 적용될 강제적인 틀을 적용 (스키마)
const counterSchema = new mongoose.Schema(
	{
		name: String,
		community: Number,
	},
	{ collection: 'Counter' }
);

// 스키마를 적용한 모델 생성함수를 export
const Counter = mongoose.model('Counter', counterSchema);
export { Counter };
