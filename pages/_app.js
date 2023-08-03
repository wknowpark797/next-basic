import '@/styles/globals.scss';

export default function App({ Component, pageProps }) {
	return <Component {...pageProps} />;
}

/*
	[ Pre Rendering (Next.js 작업방식) ]

	- Next는 초기에 서버단에서 미리 만들어진 pages폴더 안쪽에 있는 정적인 컨텐츠를 html로 미리 렌더링한 상태에서 초기 로딩처리 (SEO에 좋음)
	- 이후에 동적으로 데이터 연동을 위한 리액트 컴포넌트가 load 완료되면 static한 페이지에 해당 내용을 결합 (Hydration)
	- pages (정적인 파일들) / component (동적인 파일들)
	- 기존의 리액트는 초기에 모든 서브페이지에 해당하는 파일들을 모두 가져온 다음 렌더링하기 때문에 초기 로딩속도가 늦음
	- Next는 초기 메인 페이지만 pre-render된 상태로 가져오고 서브페이지에 해당하는 파일들은 데이터만 json형태로만 미리 load시켜 초기에 load 시켜야 하는 파일의 개수와 용량을 줄인다.
	- 다른 페이지의 데이터 구분은 Next 전용의 Link 컴포넌트에 연결되어 있는 라우터명을 통해 json형태로 데이터만 미리 load처리

	> SSG 방식 (바뀌지 않는다.)
		: Static-Site-Generation
		- Next 프로젝트를 빌드시 pre-render
		- 장점: 미리 build 시점에 페이지가 완성되기 때문에 초기 로딩속도가 빠르다.
		- 단점: 요청전에 미리 프리렌더되기 때문에 정적인 페이지만 적용 가능

	> SSR 방식 (수시로 바뀐다.)
		: Server-Side-Rendering
		- 서버에 요청이 들어오면 서버단에서 data fetching 후 pre-render
		- 장점: SSG보다 느리지만 CSR방식에 비해 초기 로딩속도가 빠르고 요청시마다 새로운 데이터 갱신 가능
		- 단점: 서버 호출시 pre-render되기 때문에 SSG보다 느리다.

	> ISR 방식 (처음에 안바뀌지만 가끔 바뀐다.)
		: Incremental-Static-Revalidation
		- Next 프로젝트 빌드시 pre-render
		- 장점: SSG와 마찬가지로 빌드시에 미리 페이지가 만들어지기 때문에 초기 로딩속도가 빠르다.
						일정시간마다 새롭게 갱신된 데이터로 정기적으로 revalidation처리
*/
