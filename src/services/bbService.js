export default class BbService {
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
    
    getCharacter (char_id) {
        return this.getResource(`/characters/${char_id}`);
    }
    
    getAllQuotes() {
        return this.getResource(`/quotes/`);
    }
    
    getgetAllQuote(quote_id) {
        return this.getResource(`/quotes/${quote_id}/`);
    }
}