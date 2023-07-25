import { BaseApiResponse } from './response';

export interface ProfileResponse extends BaseApiResponse {
	email: string;
	name: string;
	nickname: string;
	avatarUrl?: string;
}

export interface AuthResponse extends BaseApiResponse {
	data: {
		isSuccess: boolean;
		message: string;
	};
}

export interface LoginResponse extends AuthResponse {
	email: string;
	nickname: string;
}

export interface UserData {
	email: string;
	password: string;
}

export interface NewUserData extends UserData {
	name: string;
	nickname: string;
	confirmPassword: string;
}
