
import {delay} from 'dva/saga';
export default {

  namespace: 'counter',

  state: {
  	count:2,
  },
  effects: {
    *asyncAdd({ payload }, { call, put }) {  // eslint-disable-line
      yield call(delay,1000);
      yield put({ type: 'add' });
    },
  },
  reducers: {
    add(state, action) {
      console.log(action)
      return {
        count:state.count+1
       };
    },
  }

};
