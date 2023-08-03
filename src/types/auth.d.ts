import { BaseApiResponse } from './response';

export interface ProflieResponse {
	isSuccess: boolean;
	user: {
		id: string;
		email: string;
		nickname: string;
		name: string;
		avatarUrl: string;
	};
}

export interface AuthResponse extends BaseApiResponse {
	data: {
		isSuccess: boolean;
		message: string;
	};
}

export interface LoginResponse {
	data: {
		isSuccess: boolean;
		message: string;
		user: {
			id: string;
			email: string;
			nickname: string;
			name: string;
			avatarUrl: string;
		};
	};
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
