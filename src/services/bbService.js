export default class bbService {
    constructor() {
        this._apiBase = 'https://www.breakingbadapi.com/api';
    }

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);
    
        if (!res.ok) {
          throw new Error(`Could not fetch ${url}` +
            `, received ${res.status}`);
        }
        return await res.json();
    }

    getAllEpisodes = () => {
        return this.getResource(`/episodes/`);
    }
    
    getEpisode = (episode_id) => {
        return this.getResource(`/books/${episode_id}/`);
    }
    
    getAllCharacters = async () => {
        const res = await this.getResource(`/characters?limit=10`);
        return res.map(this._transformCharacters)
    }
    
    getCharacter = async (id) => {
        const character = await this.getResource(`/characters/${id}`);
        return this._transformCharacter(character);
    }
    
    getAllQuotes = () => {
        return this.getResource(`/quotes/`);
    }
    
    getgetAllQuote = (quote_id) => {
        return this.getResource(`/quotes/${quote_id}/`);
    }

    _transformCharacters(char) {
        return {
            name: char.name,
            birthday: char.birthday,
            nickname: char.nickname,
            status: char.status,
            occupation: char.occupation,
            img: char.img
        }
    }
    _transformCharacter(char) {
        return {
            name: char[0].name,
            birthday: char[0].birthday,
            nickname: char[0].nickname,
            status: char[0].status,
            occupation: char[0].occupation,
            img: char[0].img
        }
    }
}