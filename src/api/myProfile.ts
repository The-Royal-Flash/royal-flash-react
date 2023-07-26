import { http } from './base';

export const changeNickname = async (nickname: string) => {
	console.log(nickname);
	const data = await http.post('profile/edit/nickname', { nickname });

	console.log(data);
};

// 내 프로필 정보 가져오기
// 이름 수정
// 닉네임 수정
// 프로필 이미지 등록/변경
// 비멀번호 변경
// 계정 삭제
