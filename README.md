api : https://budget-cal-api.run.goorm.io
web : https://calc-my-budget-xhwmr.run.goorm.io

auth를 해결하기 위해 거친 과정

1. index.js 에서 Auth() 에 component를 통과시키는 과정
   withRouter 가 react-router-dom version 6 에서는 더이상 지원하지 않음
   react-router-dom version 5 로 다운그레이드 시키고 대신 버전문법에 맞게 Routes 대신 Route, element 대신 component 사용

2. User model 에서 statics 랑 methods 는 다르다.

3. User 가 undefined 되어 있을 땐 import 가 잘 돼있는지 확인. import 할 때 구조분해 필요없는데 쓰면 import가 제대로 안될 수가 있음

4. dispatch 는 sync 여서 then을 사용하려면 추가적인 설정이 필요함.
   index.js 에 createStore 할 때 해야 하는 조치가 있으니 참고할 것
   필요 모듈:
   import { applyMiddleware, createStore } from 'redux';
   import promiseMiddlerware from 'redux-promise';
   import reduxThunk from 'redux-thunk';

5. axios 사용 시 cors 문제 해결

-   Reducer 사용법

store의 값을 변화 시키기 위해서는 action이 필요한데 그 action을 action creater가 만들어주고
action creater를 담은 dispatch 열차가 store의 reducer에게 action을 전달해주면
reducer가 action의 type을 보고 그에 맞는 행동을 해주는 것

(1) Action
: 중앙 저장소에 저장된 state에 “무슨” 동작을 할 것이지 적어놓는 객체
action에는 type이 필수로 필요
type을 직접 처럼 선언하거나, 모듈로 저장
-> 예) \_action/type.js

(2) Action Creator
: Dispatch라는 열차에 Action을 태워서 보내줄 때
Dispatch에 inline으로 action을 넣는 것이 불편하기 때문에 action객체를 return 해주는 함수를 만들어놓는 것 (즉, Action을 return 해주는 함수)
-> 예) \_action/user_action.js

(3) Dispatch
: Action Creater로 return 해준 Action을 파라메터로 받아 store의 reducer에게 넘겨주는 역할을 해주는 열차
-> 예) components/view/LoginPage/LoginPage.js

(4) reducer
: dispatch열차를 타고온 action의 type을 확인해서 그에 맞는 동작을 하는 곳
reducer은 store의 state를 변경시켜야하기 때문에 state를 파라메터로 받고,
dispatch를 타고온 action을 파라메터로 받아서
action의 type을 switch case문으로 조건을 걸어 동작
-> 예) \_reducers/user_reducer.js

(5) combineReducers
: 여러 개의 reducer을 하나의 root reducer로 만들어주는 것
-> 예) \_reducers/index.js









https://stackoverflow.com/questions/68224532/req-cookies-returns-object-null-prototype-even-if-the-cookie-is-set