import types from './types';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case types.REQUEST:
      return { ...state, loading: true };
    case types.SUCCESS:
      return { ...state, loading: false, response: action.response.data };
    default:
      return state;
  }
};
export default reducer;
