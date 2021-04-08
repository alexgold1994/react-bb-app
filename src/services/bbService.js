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

    getAllEpisodes() {
        return this.getResource(`/episodes/`);
    }
    
    getEpisode(episode_id) {
        return this.getResource(`/books/${episode_id}/`);
    }
    
    getAllCharacters() {
        return this.getResource(`/characters`);
    }
    
    getCharacter = async (char_id) => {
        const res = await this.getResource(`/characters/${char_id}`);
        return res;
    }
    
    getAllQuotes() {
        return this.getResource(`/quotes/`);
    }
    
    getgetAllQuote(quote_id) {
        return this.getResource(`/quotes/${quote_id}/`);
    }
}