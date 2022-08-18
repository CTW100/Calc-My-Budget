import axios from 'axios';
import { REGISTER_USER, LOGIN_USER, AUTH_USER } from './types';

export function registerUser(dataToSubmit) {
	const request = axios
		.post('https://budget-cal-api.run.goorm.io/users/new', dataToSubmit)
		.then((response) => response.data);
	// 서버에 데이터를 보낸 후, 서버에서 온 데이터 저장
	// ({ loginSuccess: true, userId: user_id })

	// redux 의 action -> 이를 dispatch를 통해 reducer로 보냄
	return {
		type: REGISTER_USER,
		payload: request,
	};
}

export function loginUser(dataToSubmit) {
	const request = axios
		.post('https://budget-cal-api.run.goorm.io/users/login', dataToSubmit)
		.then((response) => {
			console.log(response.data);
			return response.data;
		});

	return {
		type: LOGIN_USER,
		payload: request,
	};
}

export function authUser() {
	const request = axios
		.get('https://budget-cal-api.run.goorm.io/users/auth')
		.then((response) => {
			console.log(response.data);
			return response.data;
		});

	return {
		type: AUTH_USER,
		payload: request,
	};
}
