import { marvelApi } from 'config/config';
import types from './types';

const getCharacters = name => ({
  type: types.REQUEST,
  payload: {
    name,
    publicKey: marvelApi.publicKey
  }
});

export { getCharacters };
