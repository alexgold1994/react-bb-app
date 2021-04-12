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

    getAllEpisodes = async () => {
        const res = await this.getResource(`/episodes`)
        return res.map(this._transformEpisodes);
    }
    
    getEpisode = async (id) => {
        const episode = await this.getResource(`/episodes/${id}`)
        return this._transformEpisodes(episode);        
    }
    
    getAllCharacters = async () => {
        const res = await this.getResource(`/characters?limit=10`);
        return res.map(this._transformCharacters);
    }
    
    getCharacter = async (id) => {
        const character = await this.getResource(`/characters/${id}`);
        return this._transformCharacter(character);
    }
    
    getAllQuotes = async () => {
        const res = await this.getResource(`/quotes`);
        return res.map(this._transformQuotes);
    }
    
    getQuote = async (id) => {
        const quote = await this.getResource(`/quotes/${id}`);
        return this._transformQuotes(quote);
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

    _transformEpisodes(ep) {
        return {
            name: ep.title,
            season: ep.season,
            episode: ep.episode,
            air_date: ep.air_date,
            characters: ep.characters,
            series: ep.series
        }
    }

    _transformQuotes(quotes) {
        return {
            name: quotes.quote,
            author: quotes.author,
            series: quotes.series
        }
    }
}