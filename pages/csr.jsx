import SubLayout from '@/components/SubLayout';
import { useState, useEffect } from 'react';

function Csr() {
	console.log('csr');
	const [Now, setNow] = useState('');

	useEffect(() => {
		setNow(performance.now());
		/*
      - 브라우저단에서 실행 
      - 페이지가 mount되는 시점마다 연산값을 가져온다.
      - 새로고침하면 값이 계속 변한다.
      - 빈번하게 바뀌는 값
    */
	}, []);

	return (
		<SubLayout name={'CSR'}>
			<p>CSR 방식 테스트 페이지 입니다.</p>
			<h1>{Now}</h1>
		</SubLayout>
	);
}

export default Csr;
