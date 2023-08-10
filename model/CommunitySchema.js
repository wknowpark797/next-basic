import mongoose from 'mongoose';

const communitySchema = new mongoose.Schema(
	{
		title: String,
		content: String,
		communityNum: Number,
	},
	{ collection: 'Community' }
);

/*
	[ 모델 인스턴스가 한번 컴파일되면 overWrite가 불가능한 콘솔 에러 해결하기 ]
	- 오류 원인 : 이미 한번 생성된 컬렉션임에도 불구하고 데이터 변경요청이 있을때마다 새로운 컬렉션 생성시도 때문
	- 오류 해결 : 해당 컬렉션이 없을때는 새롭게 컬렉션을 생성하고 이미 있으면 기존의 컬렉션 호출
*/
const Community = mongoose.models.Community || mongoose.model('Community', communitySchema);
export { Community };
