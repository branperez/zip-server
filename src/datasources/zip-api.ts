const { RESTDataSource } = require('apollo-datasource-rest');

export default class ZipAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseUrl = 'https://api.zippopotam.us/';
    }

    async getZip (country: string, zip: string) {
         const data = await this.get(`https://api.zippopotam.us/${country}/${zip}`)

         return {
             ...data,
             postCode: data['post code'],
             countryAbv: data['country abbreviation']
         }
    }

    getPlaces({ places }: {places: [{ 'place name': string, 'state abbreviation': string}] }) {
        
        return places.map(place => (
            { ...place, 
                name: place['place name'], 
                stateAbv: place['state abbreviation'] 
            })
        )
    }
}
