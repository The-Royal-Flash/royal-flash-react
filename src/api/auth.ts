import { http } from './base';
import { CheckDuplicationResponse } from '../types';

export const fetchEmailDuplicationStatus = async (
	email: string,
): Promise<CheckDuplicationResponse> =>
	await http.post('auth/register/local/check-email', { email });

export const fetchNicknameDuplicationStatus = async (
	nickname: string,
): Promise<CheckDuplicationResponse> =>
	await http.post('auth/register/local/check-nickname', { nickname });

// 로그인
// 회원가입
