export default interface countryData {
    name: {
        common: string;
        official: string;
        nativeName : {
          [key: string]: {
            common: string;
            official: string;
          }
        }
    };
    capital: string[];
    subregion: string;
    continents: string[];
    languages: {
        [key: string]: string
    };
    currencies: {
        [key: string]: {
            name: string
        }
    };
    area: number;
    population: number;
    flags: {
        svg: string;
        alt: string
    }
}
