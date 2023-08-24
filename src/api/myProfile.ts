import { http } from './base';
import { AuthResponse, ProfileResponse } from '../types/auth';
import { PwChangeData } from '../types/profile';

export const fetchProfile = async (): Promise<ProfileResponse> =>
	await http.get('profile');

export const updateNickname = async (nickname: string): Promise<AuthResponse> =>
	await http.post('profile/edit/nickname', { nickname });

export const uploadImage = async (formData: FormData) => {
	return await http.postImage('profile/edit/avatar', formData);
};

export const changePassword = async (
	pwChangeData: PwChangeData,
): Promise<AuthResponse> =>
	await http.post('profile/edit/password', pwChangeData);

// 계정 삭제
