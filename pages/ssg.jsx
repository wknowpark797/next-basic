import SubLayout from '@/components/SubLayout';

function Ssg(props) {
	return (
		<SubLayout name={'SSG'}>
			<p>SSG 방식 테스트 페이지 입니다.</p>
			<h1>{props.now}</h1>
			{/* 
				- 서버단에서 실행
				- 빌드되는 시점에 연산값을 가져온다.
				- 서버의 연산값을 static하게 저장 (미리 페이지를 pre-render)
				- 새로고침해도 값이 변하지 않는다.
				- 한번 렌더링된 후 바뀌지 않는 값 재활용 (빌드 후)
				- Next에서 SSG 방식을 권장한다.

				- 해당 프로젝트를 빌드시에 한번만 데이터 호출

				-> 일정 시간마다 바뀌길 원한다면 ISR (일정 시간마다 빌드)
			*/}
		</SubLayout>
	);
}

export async function getStaticProps() {
	console.log('ssg');

	return {
		props: { now: performance.now() },
	};
}

export default Ssg;
