import types from './types';

const initialState = {
  characters: [],
  loading: false,
  name: '',
  pageInfo: {
    offset: 0,
    limit: 20,
    hasMore: false
  }
};

const handler = {
  [types.SUCCESS]: (state, action) => {
    const { results, total, offset, limit } = action.response.data;
    const characters = offset > 0 ? [...state.characters, ...results] : results;

    return {
      ...state,
      loading: false,
      characters: characters,
      pageInfo: {
        offset,
        limit,
        hasMore: Math.ceil((total / limit)) > Math.ceil((offset / limit) + 1)
      }
    };
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.REQUEST:
      return { ...state, loading: true, name: action.payload.name };
    case types.SUCCESS:
      return handler[types.SUCCESS](state, action);
    default:
      return state;
  }
};
export default reducer;
