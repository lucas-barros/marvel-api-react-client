import { marvelApi } from 'config/config';
import types from './types';

const getCharacters = ({ name, offset }) => ({
  type: types.REQUEST,
  payload: {
    name,
    offset,
    publicKey: marvelApi.publicKey
  }
});

export { getCharacters };
