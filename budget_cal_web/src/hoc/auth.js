import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authUser } from '../_actions/userAction';

export default function (SpecificComponent, option) {
	// option - null, true, false
	// null - 아무나 출입이 가능한 페이지
	// true - 로그인한 유저만 출입이 가능한 페이지
	// false - 로그인한 유저는 출입 불가능한 페이지

	function AuthenticationCheck(props) {
		// 백엔드에 Request를 날려서 현재 상태를 가져옴 (로그인 했는지, 아닌지)
		const dispatch = useDispatch();

		// useEffect 를 사용해서 초기 검증을 실행해준다
		useEffect(() => {
			// 아무나 진입 가능한 페이지
			// 로그인한 회원만 진입 가능한 페이지
			// 로그인한 회원은 진입 못하는 페이지
			// 관리자만 진입 가능한 페이지

			dispatch(authUser()).then((response) => {
				console.log(response);
				// 로그인 하지 않은 상태
				if (!response.payload.isAuth) {
					// 로그인 하지 않은 상태에서 로그인한 유저만 출입 가능한 페이지로 들어갈 때
					if (option) {
						props.history.push('/users/login');
					}
				} else {
					// 로그인 한 상태
					// 로그인한 유저가 출입 불가능한 페이지에 들어가려고 할 때
					if (option === false) {
						props.history.push('/');
					}
				}
			});
		}, []);

		return <SpecificComponent />;
	}
	return AuthenticationCheck;
}
