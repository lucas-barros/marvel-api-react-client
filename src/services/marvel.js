import fetch from 'isomorphic-fetch';

const BASE_URL = 'https://gateway.marvel.com:443';

const getCharacters = async payload => {
  const { publicKey, offset = 0, limit = 20, name } = payload;
  let params = `offset=${offset}&limit=${limit}&apikey=${publicKey}`;
  if (name) {
    params += `&nameStartsWith=${name}`;
  }

  const response = await fetch(`${BASE_URL}/v1/public/characters?${params}`);

  return response.json();
};

export { getCharacters };
