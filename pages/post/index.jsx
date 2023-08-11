import SubLayout from '@/components/SubLayout';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useGlobalData } from '@/hooks/useGlobalContext';

function Post() {
	const [Tit, setTit] = useState('');
	const [Con, setCon] = useState('');
	const { LoginInfo } = useGlobalData();
	console.log('Post LoginInfo: ', LoginInfo);

	const handleSubmit = (e) => {
		e.preventDefault();

		const item = { title: Tit, content: Con };

		axios
			.post('/api/post', item)
			.then((res) => {
				console.log(res);
				alert('글 저장에 성공했습니다.');
			})
			.catch((err) => {
				console.log(err);
				alert('글 저장에 실패했습니다.');
			});
	};

	useEffect(() => {
		axios
			.get('/api/post')
			.then((json) => {
				console.log('GET 방식: ', json);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<SubLayout>
			<p>포스트 페이지 intro 화면입니다.</p>

			<div className='input-box'>
				<form onSubmit={handleSubmit}>
					<input type='text' placeholder='제목을 입력하세요.' value={Tit} onChange={(e) => setTit(e.target.value)} />
					<br />
					<textarea
						cols='30'
						rows='3'
						placeholder='본문 내용을 입력하세요.'
						value={Con}
						onChange={(e) => setCon(e.target.value)}
					></textarea>

					<nav>
						<input type='reset' defaultValue='CANCEL' />
						<input type='submit' defaultValue='SUBMIT' />
					</nav>
				</form>
			</div>
		</SubLayout>
	);
}

export default Post;
