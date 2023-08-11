import Head from 'next/head';
import styles from '@/styles/Home.module.scss'; // @ : 루트경로
import Header from '@/components/Header';
import Image from 'next/image';
import pic from '@/public/img/pic.jpg';
import { useEffect } from 'react';
import { FaDev } from 'react-icons/fa6';
import { FcServices } from 'react-icons/fc';
import { IconContext } from 'react-icons';
import { useGlobalData } from '@/hooks/useGlobalContext';

// api 라우팅: 서버요청 처리를 위해서는 express 프레임워크를 활용
// -> next에서는 api폴더 안쪽에 서버쪽 요청 및 응답에 대한 라우팅 설정 가능
// api 폴더 안쪽의 파일명이 라우터 요청명으로 자동 설정 (ex. /api/hello)

export default function Home() {
	// 서버쪽에서 프리렌더된 페이지를 가져온 이후
	// 클라이언트쪽에서 다시 서버쪽 요청 가능
	// next 자체적으로 서버쪽 요청, 응답 처리
	/*
		useEffect(() => {
			// api 폴더 안쪽의 hello.js에 서버요청 처리
			// fetch 함수의 두번째 인수로 옵션값을 설정하지 않으면 GET방식으로 전송요청
			// { method: 전송방식, body: 전달값(문자값) }
			fetch('/api/hello', {
				method: 'POST',
				body: 'abc',
			})
				.then((res) => res.json())
				.then((json) => console.log('hello post: ', json));

			fetch('/api/hello')
				.then((res) => res.json())
				.then((json) => console.log('hello get: ', json));

			fetch('/api/members', {
				method: 'POST',
				body: 'members',
			})
				.then((res) => res.json())
				.then((json) => console.log('members post: ', json));

			fetch('/api/members')
				.then((res) => res.json())
				.then((json) => console.log('members get: ', json));
		}, []);
	*/

	const data = useGlobalData();
	console.log('Main GlobalData: ', data);

	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name='description' content='Generated by create next app' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				<Header />
				<h1>Main</h1>

				{/* 
					IconContext.Provider 컴포넌트 import 후 웹폰트 아이콘을 활용한 부모요소에 wrapping 해주면 
					해당 컴포넌트 안쪽에서는 context api를 이용해서 동일한 스타일을 전역으로 활용이 가능하다.
				*/}
				<IconContext.Provider value={{ size: '30px', color: 'blue', className: 'global-class-name' }}>
					<FaDev />
				</IconContext.Provider>

				{/* 아이콘 개별 스타일 적용 */}
				{/* 직접적으로 웹폰트 아이콘에 커스텀 클래스명, 사이즈, 컬러값 지정 가능 */}
				<FaDev className='fontA' size='30px' color='red' />
				<FcServices size='30px' />

				<div className={styles.pic}>
					<Image src={pic} alt='pic' fill quality={50} />
				</div>

				<div className={styles.pic}>
					<Image
						src='https://images.unsplash.com/photo-1604998103924-89e012e5265a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
						alt='pic'
						fill
						quality={50}
					/>
				</div>
			</main>
		</>
	);
}
