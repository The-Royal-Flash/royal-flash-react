import { http } from './base';
import { AuthResponse, UserData, NewUserData, LoginResponse } from '../types';

export const checkEmail = async (email: string): Promise<AuthResponse> =>
	await http.post('auth/register/local/check-email', { email });

export const checkNickname = async (nickname: string): Promise<AuthResponse> =>
	await http.post('auth/register/local/check-nickname', { nickname });

export const logIn = async (userData: UserData): Promise<LoginResponse> =>
	await http.post('auth/login/local', userData);

export const logOut = async (): Promise<AuthResponse> =>
	await http.get('auth/logout');

export const signUp = async (newUserData: NewUserData): Promise<AuthResponse> =>
	await http.post('auth/register/local', newUserData);

export const checkForDuplicate = async (
	userInput: string,
	dataType: string,
) => {
	const { data } =
		dataType === 'email'
			? await checkEmail(userInput as string)
			: await checkNickname(userInput as string);

	return data;
};
