import { BaseApiResponse } from './response';

export interface ProfileResponse extends BaseApiResponse {
	email: string;
	name: string;
	nickname: string;
	avatarUrl?: string;
}

export interface CheckDuplicationResponse extends BaseApiResponse {
	data: {
		isSuccess: boolean;
		message: string;
	};
}
