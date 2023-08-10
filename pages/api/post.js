import { connectMongoDB } from '@/libs/MongoConnect';

// 안쪽에서 await로 동기화 처리를 할 예정이므로 wrapping함수에 async 지정
export default async function handler(req, res) {
	// await로 동기화하므로 then, catch문을 쓸 수 없으니 try, catch문으로 예외처리
	try {
		// 요청 성공시 실행될 구문
		const DB = await connectMongoDB();
	} catch (err) {
		// 요청 실패시 실행될 구문
		res.status(400).send({ err });
	}
}

/*
	[ 데이터 저장 작업 순서 ]
	1. 저장할 데이터의 구조에 맞게 스키마 생성
	2. api 라우터에서 스키마가 적용된 모델 객체에 클라이언트로부터 전달받은 데이터를 바인딩하여 DB에 저장, 응답성공 클라이언트로 전송
	2-1. 클라이언트에서 POST 요청을 받는다.
	2-2. 카운터 모델에서 communityNum값을 가져온뒤 클라이언트로부터 전달받은 객체와 결합
	2-3. 결합된 객체를 Post 모델로 저장
	2-4. 저장이 완료되면 다시 카운터의 값을 1증가
*/
