import SubLayout from '@/components/SubLayout';

function Ssr(props) {
	return (
		<SubLayout name={'SSR'}>
			<p>SSR 방식 테스트 페이지 입니다.</p>
			<h1>{props.now}</h1>
			{/* 
				- 브라우저단이 아닌 서버단에서 실행
				- CSR방식과 비슷하게 동작하지만 서버단에서 실행한다는 차이점 중요
				- 서버단에서 요청 할 때마다 값을 가져온다.
				
				- 페이지에 접속할 때마다 새로운 데이터를 호출하여 갱신
				- full load가 아니며 정적인 페이지는 재활용하면서 동적으로 서버에서 fetching한 데이터만 hydration
				- build 시점에 실행되는 것이 아닌 페이지가 렌더링 될때마다 실행
			*/}
		</SubLayout>
	);
}

export async function getServerSideProps() {
	console.log('ssr');

	return {
		props: { now: performance.now() },
	};
}

export default Ssr;
