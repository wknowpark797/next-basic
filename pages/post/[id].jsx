import SubLayout from '@/components/SubLayout';
import { useRouter } from 'next/router';

function Detail() {
	const router = useRouter();
	const { id } = router.query;
	console.log('id: ', id);

	return (
		<SubLayout>
			<p>{id}번째 포스트 상세 페이지 화면입니다.</p>
		</SubLayout>
	);
}

export default Detail;
