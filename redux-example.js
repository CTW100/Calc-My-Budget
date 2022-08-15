// 생활코딩 reducer Youtube 2022 version

import { createStore } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';
// state를 공유하고픈 컴포넌트들을 wrap
// useSelector: 어떤 state값을 쓰고 싶은지
// useDispatch: state 값을 변경시킬 때

function reducer(currentState, action) {
	if (currentState === undefined) {
		return {
			number: 1,
		};
	}
	const newState = { ...currentState };
	if (action.type === 'INCREASE') {
		newState.number++;
	}

	return newState; // return 한 값이 새로운 state 값이 된다
}

const store = createStore(reducer);

// store 안에 있는 state를 어떻게 바꿀것인가
export default function App() {
	return (
		<div>
			<Provider store={store}>
				<Left></Left>
				<Right></Right>
			</Provider>
		</div>
	);
}

function Left() {
	const dispatch = useDispatch();

	const number = useSelector((state) => state.number);

	return (
		<div
			onClick={() => {
				dispatch({ type: 'INCREASE' });
			}}
		>
			{number}
		</div>
	);
}
