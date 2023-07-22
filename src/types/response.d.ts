export interface BaseApiResponse {
	status: number;
	statusText: string;
	data: {
		isSuccess: boolean;
		message: string;
	};
}
