// 메인 페이지 전용 레이아웃
import Head from 'next/head';

function Layout(props) {
	return (
		<>
			<Head>
				<title>{props.name}</title>
			</Head>

			<main>{props.children}</main>
		</>
	);
}

export default Layout;
