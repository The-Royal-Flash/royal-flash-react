import { http } from './base';
import { AuthResponse } from '../types/auth';

export const changeNickname = async (nickname: string): Promise<AuthResponse> =>
	await http.post('profile/edit/nickname', { nickname });

// 내 프로필 정보 가져오기
// 이름 수정
// 닉네임 수정
// 프로필 이미지 등록/변경
// 비멀번호 변경
// 계정 삭제
