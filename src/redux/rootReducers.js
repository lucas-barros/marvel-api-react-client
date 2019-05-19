/* Modules */
import { combineReducers } from 'redux';

/* Reducers */
import { reducer as formReducer } from 'redux-form';

import charactersReducer from 'redux/characters/reducer';

// all the reducers are in one place
const rootReducers = combineReducers({
  formState: formReducer,
  characterState: charactersReducer
});

export default rootReducers;
