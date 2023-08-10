import mongoose from 'mongoose';

// 몽고DB 접속 함수를 정의한 후 export
export const connectMongoDB = async () => {
	// readyState === 1 : 접속 성공 상태
	// 만약 해당 함수 호출시 몽고DB 접속에 성공하면 접속 성공객체를 promise 형태로 반환값을 리턴
	if (mongoose.connection.readyState === 1) {
		return mongoose.connection.asPromise();
	}

	// 위의 조건문에서 성공 promise가 반환되면 동기적으로 몽고DB 접속 후 접속 상태를 리턴
	// 해당 함수를 몽고DB를 사용해야하는 페이지나 컴포넌트에서 호출하면 몽고DB 접속 가능
	// 중요 접속 정보를 숨기기 위해서 로컬 환경변수 파일에 몽고DB 접속 URL을 등록한 후 호출
	return await mongoose.connect(process.env.MONGO_URI);
};
