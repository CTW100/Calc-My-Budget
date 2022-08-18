import { REGISTER_USER, LOGIN_USER, AUTH_USER } from '../_actions/types';

export default function (state = {}, action) {
	switch (action.type) {
		case REGISTER_USER:
			return { ...state, Success: action.payload };
		case LOGIN_USER:
			return { ...state, loginSuccess: action.payload };
		case AUTH_USER:
			// 모든 유저 데이터가 userData에 들어오게 됨 ... state는 이 전의 유저들의 데이터가 다 들어가는 거고 userData는 새 유저
			return { ...state, userData: action.payload };
		default:
			return state;
	}
}
