import { http } from './base';
import { AuthResponse, ProfileResponse } from '../types/auth';
import { PwChangeData } from '../types/profile';

export const fetchProfile = async (): Promise<ProfileResponse> =>
	await http.get('profile');

export const updateNickname = async (nickname: string): Promise<AuthResponse> =>
	// await http.post('profile/edit/nickname', { nickname });
	await http.post('profile/edit/nickname', { nickname });

export const uploadImage = async (formData: { image: File }) =>
	await http.post('profile/edit/avatar', formData);

export const changePassword = async (
	pwChangeData: PwChangeData,
): Promise<AuthResponse> =>
	await http.post('profile/edit/password', pwChangeData);

// 프로필 이미지 등록/변경
// 계정 삭제
