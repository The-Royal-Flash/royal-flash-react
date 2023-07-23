import { http } from './base';
import { AuthResponse, UserData, NewUserData } from '../types';

export const checkEmail = async (email: string): Promise<AuthResponse> =>
	await http.post('auth/register/local/check-email', { email });

export const checkNickname = async (nickname: string): Promise<AuthResponse> =>
	await http.post('auth/register/local/check-nickname', { nickname });

export const logIn = async (userData: UserData): Promise<AuthResponse> =>
	await http.post('auth/login/local', userData);

export const signUp = async (newUserData: NewUserData): Promise<AuthResponse> =>
	await http.post('auth/register/local', newUserData);
