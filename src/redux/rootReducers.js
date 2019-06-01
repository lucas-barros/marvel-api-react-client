import { combineReducers } from 'redux';

import charactersReducer from 'redux/characters/reducer';

const rootReducers = combineReducers({
  characterState: charactersReducer
});

export default rootReducers;
