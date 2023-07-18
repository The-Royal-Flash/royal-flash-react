import axios from 'axios';

export const http = {
	get: function get<T>(url: string): Promise<T> {
		return axios.get(url).then((res) => res.data);
	},
	post: function post<T>(url: string, data: any): Promise<T> {
		return axios.post(url, { data });
	},
};
