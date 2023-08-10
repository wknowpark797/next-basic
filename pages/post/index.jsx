import SubLayout from '@/components/SubLayout';
import axios from 'axios';
import { useEffect } from 'react';

function Post() {
	useEffect(() => {
		axios.get('/api/post').then((res) => console.log(res));
	}, []);

	return (
		<SubLayout>
			<p>포스트 페이지 intro 화면입니다.</p>
		</SubLayout>
	);
}

export default Post;
