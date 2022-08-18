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
