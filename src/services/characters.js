import Api from '../utils/api';

class CharacterService {
  static getCharacters(payload) {
    const { publicKey, offset = 0, limit = 20, name } = payload;
    let params = `offset=${offset}&limit=${limit}&apikey=${publicKey}`;
    if (name) {
      params += `&nameStartsWith=${name}`;
    }

    return Api.get(`/v1/public/characters?${params}`);
  }
}

export default CharacterService;
