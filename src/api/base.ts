import axios from 'axios';
import qs from 'qs';

const service = axios.create({
	baseURL: import.meta.env.VITE_BASE_URL,
	paramsSerializer: (params) => qs.stringify(params, { arrayFormat: 'comma' }),
	timeout: 1000,
});

export const http = {
	get: function get<T>(url: string, params?: any): Promise<T> {
		return service.get(url, { params }).then((res) => res.data);
	},
	post: function post<T>(url: string, data: any): Promise<T> {
		return service.post(url, { ...data });
	},
	delete: function remove<T>(url: string, data: any): Promise<T> {
		return service.delete(url, { ...data });
	},
};
